package com.assistive.backend.service.impl;


import com.assistive.backend.dto.UpdateUserRolesDTO;
import com.assistive.backend.dto.UpdateUserStatusDTO;
import com.assistive.backend.entity.SysUser;
import com.assistive.backend.exception.BusinessException;
import com.assistive.backend.mapper.SysRoleMapper;
import com.assistive.backend.mapper.SysUserMapper;
import com.assistive.backend.mapper.SysUserRoleMapper;
import com.assistive.backend.service.AdminService;
import com.assistive.backend.utils.ListUtils;
import com.assistive.backend.vo.RoleItemVO;
import com.assistive.backend.vo.UserListItemVO;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Objects;

@Service
public class AdminServiceImpl implements AdminService {

    private final SysRoleMapper sysRoleMapper;
    private final SysUserMapper sysUserMapper;
    private final SysUserRoleMapper sysUserRoleMapper;
    public AdminServiceImpl(SysRoleMapper sysRoleMapper, SysUserMapper sysUserMapper,SysUserRoleMapper sysUserRoleMapper) {
        this.sysRoleMapper = sysRoleMapper;
        this.sysUserMapper = sysUserMapper;
        this.sysUserRoleMapper = sysUserRoleMapper;
    }

    @Override
    public List<UserListItemVO> getAllUsers() {
        List<UserListItemVO> users = sysUserMapper.getAllUsers();

        for (UserListItemVO user : users) {
            user.setRoles(getRolesByUserId(user.getUserId()));
        }

        return users;
    }

    @Override
    public List<RoleItemVO> getRolesByUserId(long userId) {
        return sysRoleMapper.selectAllRolesByUserId(userId);
    }

    @Override
    @Transactional
    public int updateUserRoles(Long userId, UpdateUserRolesDTO updateUserRolesDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        int count;
        //检查用户是否存在

        List<String> roles = ListUtils.deduplicate(updateUserRolesDTO.getRoleCodes());

        if (sysUserMapper.selectUserByUserId(userId) == null) {
            throw new BusinessException("用户不存在");
        }
        //降权保护
        if ((userId == Long.parseLong(Objects.requireNonNull(authentication.getPrincipal()).toString()))
            && !ListUtils.contains(roles,"ADMIN")){
            throw new BusinessException("不可在此处删除自己的ADMIN身份，请另寻方法");
        }

        //判断是否为空
        if (roles.isEmpty()) {
            throw new BusinessException("角色列表不可为空");
        }

        //检查角色是否存在
        for (String role : roles) {
            if (sysRoleMapper.selectRoleByCode(role) == null) {
                throw new BusinessException(role + "不存在这个角色");
            }
        }

        //删除所有角色
        count = sysUserRoleMapper.deleteAllRoleByUserId(userId);

        //更新角色
        for (String role : roles) {

            //插入角色
            Long roleId = sysRoleMapper.selectRoleByCode(role).getId();
            sysUserRoleMapper.insertRoleIdByUserId(userId,roleId);

        }
        return count;
    }


    @Override
    @Transactional
    public void updateUserStatus(Long userId, UpdateUserStatusDTO updateUserStatusDTO) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        SysUser user = sysUserMapper.selectUserByUserId(userId);

        if (user == null) {
            throw new BusinessException("用户不存在！！！");
        }

        if (updateUserStatusDTO.getStatus() != 0 && updateUserStatusDTO.getStatus() != 1) {
            throw new BusinessException("传参错误，请检查是否为0或1!");
        }

        if ((user.getId() == Long.parseLong(Objects.requireNonNull(authentication.getPrincipal()).toString()))
                && (updateUserStatusDTO.getStatus() == 0)) {
            throw new BusinessException("小逼崽子我就知道你会禁自己账号");
        }

        if (user.getStatus() != 1 && user.getStatus() != 0) {
            throw new BusinessException("状态码是" + user.getStatus() + "，不能在这里修改");
        }

        user.setStatus(updateUserStatusDTO.getStatus());

        int count = sysUserMapper.updateById(user);

        if (count != 1) {
            throw new BusinessException("未知错误！！！");
        }
    }
}

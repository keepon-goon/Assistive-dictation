package com.assistive.backend.service.impl;


import com.assistive.backend.dto.LoginDTO;
import com.assistive.backend.dto.RegisterDTO;
import com.assistive.backend.entity.SysRole;
import com.assistive.backend.entity.SysUser;
import com.assistive.backend.entity.SysUserRole;
import com.assistive.backend.exception.BusinessException;
import com.assistive.backend.mapper.SysRoleMapper;
import com.assistive.backend.mapper.SysUserMapper;
import com.assistive.backend.mapper.SysUserRoleMapper;
import com.assistive.backend.service.AuthService;
import com.assistive.backend.utils.JwtUtils;
import com.assistive.backend.vo.LoginVO;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class AuthServiceImpl implements AuthService {

    private final SysUserMapper sysUserMapper;
    private final SysRoleMapper sysRoleMapper;
    private final SysUserRoleMapper sysUserRoleMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtUtils jwtUtils;

    public AuthServiceImpl(SysUserMapper sysUserMapper,
                           PasswordEncoder passwordEncoder,
                           SysRoleMapper sysRoleMapper,
                           SysUserRoleMapper sysUserRoleMapper,
                           JwtUtils jwtUtils) {
        this.sysUserMapper = sysUserMapper;
        this.sysRoleMapper = sysRoleMapper;
        this.sysUserRoleMapper = sysUserRoleMapper;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtils = jwtUtils;
    }

    @Override
    public LoginVO login(LoginDTO loginDTO) {

        // 1. 查用户
        SysUser user = sysUserMapper.selectByUsername(loginDTO.getUsername());

        // 2. 用户不存在
        if (user == null) {
            throw new BusinessException(400, "用户名或密码错误");
        }

        // 3. 用户状态校验（假设 1=启用，0=禁用）
        if (user.getStatus() != null && user.getStatus() == 0) {
            throw new BusinessException(403, "账号已被禁用");
        }

        // 4. 校验密码（明文 vs BCrypt密文）
        if (!passwordEncoder.matches(loginDTO.getPassword(), user.getPassword())) {
            throw new BusinessException(400, "用户名或密码错误");
        }

        // 5. 生成 token 并返回
        String token = jwtUtils.generateToken(user.getId(), user.getUsername());
        LoginVO vo = new LoginVO();
        vo.setToken(token);
        return vo;
    }

    @Transactional
    @Override
    public void register(RegisterDTO registerDTO) {

        if (sysUserMapper.selectByUsername(registerDTO.getUsername()) == null) {
            SysUser user = new SysUser();

            user.setUsername(registerDTO.getUsername());
            user.setPassword(passwordEncoder.encode(registerDTO.getPassword()));
            user.setNickname(registerDTO.getNickname());
            user.setPhone(registerDTO.getPhone());
            user.setEmail(registerDTO.getEmail());
            user.setStatus(1);

            sysUserMapper.insert(user);

            SysRole role = sysRoleMapper.selectRoleByCode("USER");

            SysUserRole sysUserRole = new SysUserRole();
            sysUserRole.setUserId(user.getId());
            sysUserRole.setRoleId(role.getId());

            sysUserRoleMapper.insert(sysUserRole);

        } else
            throw new BusinessException("用户名已存在！");
    }
}

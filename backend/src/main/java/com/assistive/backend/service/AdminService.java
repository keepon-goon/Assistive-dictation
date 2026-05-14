package com.assistive.backend.service;



import com.assistive.backend.dto.UpdateUserRolesDTO;
import com.assistive.backend.dto.UpdateUserStatusDTO;
import com.assistive.backend.vo.RoleItemVO;
import com.assistive.backend.vo.UserListItemVO;

import java.util.List;

public interface AdminService {

    List<UserListItemVO> getAllUsers();

    List<RoleItemVO> getRolesByUserId(long userId);

    int updateUserRoles(Long userId, UpdateUserRolesDTO updateUserRolesDTO);

    void updateUserStatus(Long userId, UpdateUserStatusDTO updateUserStatusDTO);
}

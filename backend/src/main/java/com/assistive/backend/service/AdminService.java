package com.assistive.backend.service;



import com.assistive.backend.dto.UpdateUserStatusDTO;
import com.assistive.backend.vo.UserListItemVO;

import java.util.List;

public interface AdminService {

    List<UserListItemVO> getAllUsers();

    void updateUserStatus(Long userId, UpdateUserStatusDTO updateUserStatusDTO);
}

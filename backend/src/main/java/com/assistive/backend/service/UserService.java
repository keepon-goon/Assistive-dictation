package com.assistive.backend.service;


import com.assistive.backend.dto.UpdatePasswordDTO;
import com.assistive.backend.dto.UpdateUserProfileDTO;
import com.assistive.backend.vo.UserInfoVO;

public interface UserService {
    UserInfoVO getCurrentUser();

    void updateProfile(UpdateUserProfileDTO updateUserProfileDTO);

    void updatePassword(UpdatePasswordDTO updatePasswordDTO);
}

package com.assistive.backend.controller;


import com.assistive.backend.common.Result;
import com.assistive.backend.dto.UpdatePasswordDTO;
import com.assistive.backend.dto.UpdateUserProfileDTO;
import com.assistive.backend.service.UserService;
import com.assistive.backend.vo.UserInfoVO;
import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/me")
    public Result<UserInfoVO> me() {
        UserInfoVO userInfoVO = userService.getCurrentUser();
        return Result.success(userInfoVO);
    }

    @PostMapping("/profile")
    public Result<String> updateProfile(@Valid @RequestBody UpdateUserProfileDTO updateUserProfileDTO){
        userService.updateProfile(updateUserProfileDTO);
        return Result.success("更新成功");
    }

    @PostMapping("/password")
    public Result<String> updatePassword(@Valid @RequestBody UpdatePasswordDTO updatePasswordDTO){
        userService.updatePassword(updatePasswordDTO);
        return Result.success("密码更改成功");
    }
}

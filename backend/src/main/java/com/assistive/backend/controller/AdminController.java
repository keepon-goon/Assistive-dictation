package com.assistive.backend.controller;

import com.assistive.backend.common.Result;
import com.assistive.backend.dto.UpdateUserRolesDTO;
import com.assistive.backend.dto.UpdateUserStatusDTO;
import com.assistive.backend.service.AdminService;
import com.assistive.backend.vo.UserListItemVO;
import jakarta.validation.Valid;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    public AdminController(AdminService adminService){
        this.adminService = adminService;

    }

    @GetMapping("/hello")
    @PreAuthorize("hasRole('ADMIN')")
    public Result<String> hello(){
        return Result.success("管理员接口验权成功");
    }


    @GetMapping("/users")
    @PreAuthorize("hasRole('ADMIN')")
    public Result<List<UserListItemVO>> getUsers(){
        return Result.success(adminService.getAllUsers());
    }

    @PutMapping("/users/{userId}/status")
    @PreAuthorize("hasRole('ADMIN')")
    public Result<String> updateUserStatus(@PathVariable Long userId,
                                           @Valid @RequestBody UpdateUserStatusDTO updateUserStatusDTO){
        adminService.updateUserStatus(userId,updateUserStatusDTO);
        return Result.success("用户状态更新成功");
    }

    @PutMapping("/users/{userId}/roles")
    @PreAuthorize("hasRole('ADMIN')")
    public Result<String> updateUserRoles(@PathVariable Long userId,
                                         @Valid @RequestBody UpdateUserRolesDTO updateUserRolesDTO){
        int count = adminService.updateUserRoles(userId,updateUserRolesDTO);
        return Result.success("用户角色更改成功，删除了"+count+"条");
    }
}

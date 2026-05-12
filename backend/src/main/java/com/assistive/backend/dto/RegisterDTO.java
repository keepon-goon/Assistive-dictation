package com.assistive.backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class RegisterDTO {
    @NotBlank(message = "用户名不能为空！！！")
    String username;
    @NotBlank(message = "密码不能为空！！！")
    @NotBlank
    String password;
    @NotBlank(message = "昵称不能为空！！！")
    String nickname;
    @NotBlank(message = "手机号不能为空！！！")
    String phone;
    @NotBlank(message = "邮箱不能为空！！！")
    @Email
    String email;
}

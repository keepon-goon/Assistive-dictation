package com.assistive.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UpdatePasswordDTO {

    @NotBlank(message = "新密码不能为空！！！")
    private String newPassword;

    @NotBlank(message = "旧密码不能为空！！！")
    private String oldPassword;



}

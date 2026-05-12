package com.assistive.backend.vo;

import lombok.Data;

import java.util.List;

@Data
public class UserInfoVO {

    private Long id;

    private String username;

    private String nickname;

    private String phone;

    private String email;

    private Integer status;

    List<String> roles;
}

package com.assistive.backend.vo;

import lombok.Data;

import java.util.List;

@Data
public class UserListItemVO {

    private Long userId;
    private String username;
    private String nickname;
    private String phone;
    private String email;
    private Integer status;

    private List<RoleItemVO> roles;


}

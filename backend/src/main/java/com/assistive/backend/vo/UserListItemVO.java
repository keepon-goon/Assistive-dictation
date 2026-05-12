package com.assistive.backend.vo;

import lombok.Data;

@Data
public class UserListItemVO {

    private long userId;
    private String username;
    private String nickname;
    private String phone;
    private String email;
    private Integer status;
    private String roleName;
    private String roleCode;


}

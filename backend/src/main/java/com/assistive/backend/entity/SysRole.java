package com.assistive.backend.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@TableName("sys_role")
public class SysRole {
    @TableId(value = "id", type = IdType.AUTO)
    private Long id;

    private String roleName;

    private String roleCode;

    private LocalDateTime createTime;

    private LocalDateTime updateTime;
}

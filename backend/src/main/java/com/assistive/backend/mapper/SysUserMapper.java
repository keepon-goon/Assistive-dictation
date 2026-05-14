package com.assistive.backend.mapper;

import com.assistive.backend.entity.SysUser;
import com.assistive.backend.vo.UserListItemVO;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;


import java.util.List;


@Mapper
public interface SysUserMapper extends BaseMapper<SysUser> {

    @Select("select * from sys_user where username = #{username}")
    SysUser selectByUsername(String username);


    @Select("select * from sys_user where id = #{userId}")
    SysUser selectUserByUserId(long userId);

    @Select("select id as userId,username,nickname,phone,email,status from sys_user")
    List<UserListItemVO> getAllUsers();
}

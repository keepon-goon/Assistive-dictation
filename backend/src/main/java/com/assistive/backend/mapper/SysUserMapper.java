package com.assistive.backend.mapper;

import com.assistive.backend.entity.SysUser;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;



@Mapper
public interface SysUserMapper extends BaseMapper<SysUser> {

    @Select("select * from sys_user where username = #{username}")
    SysUser selectByUsername(String username);


    @Select("select * from sys_user where id = #{userId}")
    SysUser selectUserByUserId(long userId);
}

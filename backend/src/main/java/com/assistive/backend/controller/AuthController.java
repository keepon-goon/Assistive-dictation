package com.assistive.backend.controller;

import com.assistive.backend.common.Result;
import com.assistive.backend.dto.LoginDTO;
import com.assistive.backend.dto.RegisterDTO;
import com.assistive.backend.service.AuthService;
import com.assistive.backend.vo.LoginVO;
import jakarta.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    // 使用构造器注入，依赖更明确，也方便测试
    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public Result<LoginVO> login(@Valid @RequestBody LoginDTO loginDTO) {
        LoginVO loginVO = authService.login(loginDTO);
        return Result.success(loginVO);
    }

    @PostMapping("/register")
    public Result<String> register(@Valid @RequestBody RegisterDTO registerDTO){
        authService.register(registerDTO);
        return Result.success("注册成功");
    }

}

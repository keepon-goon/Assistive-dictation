package com.assistive.backend.service;


import com.assistive.backend.dto.LoginDTO;
import com.assistive.backend.dto.RegisterDTO;
import com.assistive.backend.vo.LoginVO;

public interface AuthService {
    LoginVO login(LoginDTO loginDTO);

    void register(RegisterDTO registerDTO);


}

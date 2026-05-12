package com.assistive.backend.exception;

import lombok.Getter;

@Getter
public class BusinessException extends RuntimeException{

    private final Integer code ;
    private final String message;

    public BusinessException(String message) {
        super(message);
        this.code = 400;
        this.message = message;
    }

    public BusinessException(Integer code, String message) {
        super(message);
        this.code = code;
        this.message = message;
    }
}

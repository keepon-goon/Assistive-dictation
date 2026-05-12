package com.assistive.backend.dto;


import lombok.Data;
import lombok.NonNull;

@Data
public class UpdateUserStatusDTO {

    @NonNull
    private Integer status;

}

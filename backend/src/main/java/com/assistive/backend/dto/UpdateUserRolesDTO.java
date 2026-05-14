package com.assistive.backend.dto;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.List;

@Data
public class UpdateUserRolesDTO {

    @NotNull
    private List<String> roleCodes;


}

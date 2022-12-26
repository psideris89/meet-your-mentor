package com.psideris.meetyourmentor.model.dto;

import jakarta.validation.constraints.NotBlank;

public record BasicMenteeDto(@NotBlank String name, @NotBlank String email) {
}

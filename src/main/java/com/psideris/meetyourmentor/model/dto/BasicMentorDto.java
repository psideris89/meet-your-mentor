package com.psideris.meetyourmentor.model.dto;

import jakarta.validation.constraints.NotBlank;

public record BasicMentorDto(@NotBlank String name, @NotBlank String email, String description, String specialty) {
}

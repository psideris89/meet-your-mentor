package com.psideris.meetyourmentor.model.dto;

import jakarta.validation.constraints.NotBlank;

public record BasicCourseDto (@NotBlank String title, @NotBlank String displayTitle, String type, String description) {
}

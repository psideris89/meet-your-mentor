package com.psideris.meetyourmentor.model.dto;

import com.psideris.meetyourmentor.model.ApiResponse;

public record MentorDto(Integer id, String name, String email, String description, String specialty) implements ApiResponse {
}

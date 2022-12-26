package com.psideris.meetyourmentor.model.dto;

import com.psideris.meetyourmentor.model.ApiResponse;

public record MenteeDto(Integer id, String name, String email) implements ApiResponse {
}

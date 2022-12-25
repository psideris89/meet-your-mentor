package com.psideris.meetyourmentor.model;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public record ApiError(int code, String message, String details) implements ApiResponse {
}

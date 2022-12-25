package com.psideris.meetyourmentor.model.dto;

import com.psideris.meetyourmentor.model.ApiResponse;

public record CourseDto (Integer id, String title, String displayTitle, String type, String description) implements ApiResponse {
}

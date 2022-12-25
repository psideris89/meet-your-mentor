package com.psideris.meetyourmentor.controller;

import com.psideris.meetyourmentor.model.ApiError;
import com.psideris.meetyourmentor.model.ApiResponse;
import com.psideris.meetyourmentor.model.Course;
import com.psideris.meetyourmentor.model.dto.BasicCourseDto;
import com.psideris.meetyourmentor.model.dto.CourseDto;
import com.psideris.meetyourmentor.service.CourseService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import java.util.stream.Collectors;

@RestController
@RequestMapping("/courses")
public class CourseController {
    private final CourseService courseService;

    public CourseController(final CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public ResponseEntity<List<CourseDto>> getCourses() {
        var courses = courseService.getCourses().stream().map(Course::toDto).collect(Collectors.toList());
        return ResponseEntity.ok(courses);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getCourseById(@PathVariable Integer id) {
        var course = courseService.getCourseById(id);
        return course
                .<ResponseEntity<ApiResponse>>map(c -> ResponseEntity.ok(c.toDto()))
                .orElseGet(CourseController::courseNotFoundResponse);
    }

    @GetMapping("/title/{title}")
    public ResponseEntity<ApiResponse> getCourse(@PathVariable String title) {
        var course = courseService.getCourseByTitle(title);
        return course
                .<ResponseEntity<ApiResponse>>map(c -> ResponseEntity.ok(c.toDto()))
                .orElseGet(CourseController::courseNotFoundResponse);
    }

    @PostMapping
    public ResponseEntity<CourseDto> createCourse(@RequestBody @Valid BasicCourseDto courseDto) {
        var course = courseService.createCourse(courseDto);
        return ResponseEntity.ok(course.toDto());
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCourse(@PathVariable Integer id) {
        courseService.deleteCourseById(id);
    }

    private static ResponseEntity<ApiResponse> courseNotFoundResponse() {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(new ApiError(1000, "course not found", null));
    }
}

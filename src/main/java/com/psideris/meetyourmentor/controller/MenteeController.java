package com.psideris.meetyourmentor.controller;

import com.psideris.meetyourmentor.model.ApiError;
import com.psideris.meetyourmentor.model.ApiResponse;
import com.psideris.meetyourmentor.model.Mentee;
import com.psideris.meetyourmentor.model.dto.BasicMenteeDto;
import com.psideris.meetyourmentor.model.dto.MenteeDto;
import com.psideris.meetyourmentor.service.MenteeService;
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
@RequestMapping("/mentees")
public class MenteeController {

    private final MenteeService menteeService;

    public MenteeController(MenteeService menteeService) {
        this.menteeService = menteeService;
    }

    @GetMapping
    public ResponseEntity<List<MenteeDto>> getMentees() {
        var mentees = menteeService.getMentees().stream().map(Mentee::toDto).collect(Collectors.toList());
        return ResponseEntity.ok(mentees);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getMenteeById(@PathVariable Integer id) {
        var mentee = menteeService.getMenteeById(id);
        return mentee
                .<ResponseEntity<ApiResponse>>map(c -> ResponseEntity.ok(c.toDto()))
                .orElseGet(MenteeController::menteeNotFoundResponse);
    }

    @PostMapping
    public ResponseEntity<MenteeDto> createMentee(@RequestBody @Valid BasicMenteeDto menteeDto) {
        var mentee = menteeService.createMentee(menteeDto);
        return ResponseEntity.ok(mentee.toDto());
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMentee(@PathVariable Integer id) {
        menteeService.deleteMenteeById(id);
    }

    private static ResponseEntity<ApiResponse> menteeNotFoundResponse() {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(new ApiError(1000, "mentee not found", null));
    }
}

package com.psideris.meetyourmentor.controller;

import com.psideris.meetyourmentor.model.ApiError;
import com.psideris.meetyourmentor.model.ApiResponse;
import com.psideris.meetyourmentor.model.Mentor;
import com.psideris.meetyourmentor.model.dto.BasicMentorDto;
import com.psideris.meetyourmentor.model.dto.MentorDto;
import com.psideris.meetyourmentor.service.MentorService;
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
@RequestMapping("/mentors")
public class MentorController {
    private final MentorService mentorService;

    public MentorController(final MentorService mentorService) {
        this.mentorService = mentorService;
    }

    @GetMapping
    public ResponseEntity<List<MentorDto>> getMentors() {
        var mentors = mentorService.getMentors().stream().map(Mentor::toDto).collect(Collectors.toList());
        return ResponseEntity.ok(mentors);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse> getMentorById(@PathVariable Integer id) {
        var mentor = mentorService.getMentorById(id);
        return mentor
                .<ResponseEntity<ApiResponse>>map(c -> ResponseEntity.ok(c.toDto()))
                .orElseGet(MentorController::mentorNotFoundResponse);
    }

    @PostMapping
    public ResponseEntity<MentorDto> createMentor(@RequestBody @Valid BasicMentorDto mentorDto) {
        var mentor = mentorService.createMentor(mentorDto);
        return ResponseEntity.ok(mentor.toDto());
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteMentor(@PathVariable Integer id) {
        mentorService.deleteMentorById(id);
    }

    private static ResponseEntity<ApiResponse> mentorNotFoundResponse() {
        return ResponseEntity
                .status(HttpStatus.NOT_FOUND)
                .body(new ApiError(1000, "mentor not found", null));
    }
}

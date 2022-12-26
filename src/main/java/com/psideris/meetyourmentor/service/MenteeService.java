package com.psideris.meetyourmentor.service;

import com.psideris.meetyourmentor.model.Mentee;
import com.psideris.meetyourmentor.model.dto.BasicMenteeDto;
import com.psideris.meetyourmentor.repository.MenteeRepository;
import jakarta.validation.Valid;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenteeService {
    private final MenteeRepository menteeRepository;

    public MenteeService(MenteeRepository menteeRepository) {
        this.menteeRepository = menteeRepository;
    }

    public List<Mentee> getMentees() {
        return menteeRepository.findAll();
    }

    public Optional<Mentee> getMenteeById(Integer id) {
        return menteeRepository.findById(id);
    }

    public void deleteMenteeById(Integer id) {
        menteeRepository.deleteById(id);
    }

    public Mentee createMentee(@Valid BasicMenteeDto menteeDto) {
        return menteeRepository.save(new Mentee(menteeDto.name(), menteeDto.email()));
    }
}

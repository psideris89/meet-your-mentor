package com.psideris.meetyourmentor.service;

import com.psideris.meetyourmentor.model.Mentor;
import com.psideris.meetyourmentor.model.dto.BasicMentorDto;
import com.psideris.meetyourmentor.repository.MentorRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MentorService {
    private final MentorRepository mentorRepository;

    public MentorService(MentorRepository mentorRepository) {
        this.mentorRepository = mentorRepository;
    }

    public Optional<Mentor> getMentorById(Integer id) {
        return mentorRepository.findById(id);
    }

    public List<Mentor> getMentors() {
        return mentorRepository.findAll();
    }

    public Mentor createMentor(BasicMentorDto mentorDto) {
        var mentor = new Mentor(mentorDto.name(), mentorDto.email(), mentorDto.description(), mentorDto.specialty());
        return mentorRepository.save(mentor);
    }

    public void deleteMentorById(Integer id) {
        mentorRepository.deleteById(id);
    }
}

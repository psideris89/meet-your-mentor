package com.psideris.meetyourmentor.repository;

import com.psideris.meetyourmentor.model.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MentorRepository extends JpaRepository<Mentor, Integer> {
}

package com.psideris.meetyourmentor.repository;

import com.psideris.meetyourmentor.model.Mentee;
import com.psideris.meetyourmentor.model.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenteeRepository extends JpaRepository<Mentee, Integer> {
}

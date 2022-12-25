package com.psideris.meetyourmentor.repository;

import com.psideris.meetyourmentor.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {
    Optional<Course> findByTitle(String title);
}

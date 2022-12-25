package com.psideris.meetyourmentor.service;

import com.psideris.meetyourmentor.model.Course;
import com.psideris.meetyourmentor.model.dto.BasicCourseDto;
import com.psideris.meetyourmentor.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {
    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Optional<Course> getCourseById(Integer id) {
        return courseRepository.findById(id);
    }

    public List<Course> getCourses() {
        return courseRepository.findAll();
    }

    public Optional<Course> getCourseByTitle(String title) {
        return courseRepository.findByTitle(title.toLowerCase());
    }

    public Course createCourse(BasicCourseDto courseDto) {
        var course = new Course(courseDto.title(), courseDto.displayTitle(), courseDto.type(), courseDto.description());
        return courseRepository.save(course);
    }

    public void deleteCourseById(Integer id) {
        courseRepository.deleteById(id);
    }
}

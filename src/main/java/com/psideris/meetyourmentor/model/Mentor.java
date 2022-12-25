package com.psideris.meetyourmentor.model;

import com.psideris.meetyourmentor.model.dto.MentorDto;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.util.Objects;

@Entity(name = "Mentor")
@Table(name = "mentor")
public class Mentor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String email;
    private String description;
    private String specialty;
//    private List<Integer> courses;

    public Mentor(String name, String email, String description, String specialty) {
        this.name = name;
        this.email = email;
        this.description = description;
        this.specialty = specialty;
    }

    public Mentor() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSpecialty() {
        return specialty;
    }

    public void setSpecialty(String specialty) {
        this.specialty = specialty;
    }

    public MentorDto toDto() {
        return new MentorDto(this.id, this.name, this.email, this.description, this.specialty);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Mentor mentor = (Mentor) o;
        return id.equals(mentor.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }

    @Override
    public String toString() {
        return "Mentor{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", description='" + description + '\'' +
                ", specialty='" + specialty + '\'' +
                '}';
    }
}

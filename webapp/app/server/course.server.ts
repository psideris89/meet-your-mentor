import { Course, CourseCreation, Mentee, MenteeCreation, Mentor, MentorCreation } from "~/types";
import axios from "axios";

const API_BASE_URL = "http://localhost:8080/api";

async function getCourses(): Promise<Course[]> {
  try {
    return (await axios.get(`${API_BASE_URL}/courses`)).data
  } catch (err) {
    return Promise.resolve([] as Course[])
  }
}

async function getCourse(id: number): Promise<Course> {
  try {
    return (await axios.get(`${API_BASE_URL}/courses/${id}`)).data
  } catch (err) {
    return Promise.resolve({} as Course)
  }
}

async function createCourse(data: CourseCreation): Promise<Course> {
  try {
    return (await axios.post(`${API_BASE_URL}/courses`, data)).data
  } catch (err) {
    return Promise.resolve({} as Course)
  }
}

async function getMentors(): Promise<Mentor[]> {
  try {
    return (await axios.get(`${API_BASE_URL}/mentors`)).data
  } catch (err) {
    return Promise.resolve([] as Mentor[])
  }
}

async function createMentor(data: MentorCreation): Promise<Mentor> {
  try {
    return (await axios.post(`${API_BASE_URL}/mentors`, data)).data
  } catch (err) {
    return Promise.resolve({} as Mentor)
  }
}

async function getMentees(): Promise<Mentee[]> {
  try {
    return (await axios.get(`${API_BASE_URL}/mentees`)).data
  } catch (err) {
    return Promise.resolve([] as Mentee[])
  }
}

async function createMentee(data: MenteeCreation): Promise<Mentee> {
  try {
    return (await axios.post(`${API_BASE_URL}/mentees`, data)).data
  } catch (err) {
    return Promise.resolve({} as Mentee)
  }
}

export { getCourses, getCourse, createCourse, getMentors, createMentor, getMentees, createMentee }
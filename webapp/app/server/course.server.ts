import axios from "axios";
import { API_BASE_URL } from "~/server/index";
import { Course, CourseCreation } from "~/types";

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

export { getCourses, getCourse, createCourse }
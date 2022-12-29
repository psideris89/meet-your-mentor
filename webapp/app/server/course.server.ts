import { Course } from "~/types";
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

export { getCourses, getCourse }
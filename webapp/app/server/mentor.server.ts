import axios from "axios";
import { API_BASE_URL } from "~/server/index";
import { Mentor, MentorCreation } from "~/types";

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

export { getMentors, createMentor }
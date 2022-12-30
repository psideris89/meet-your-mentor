import axios from "axios";
import { API_BASE_URL } from "~/server/index";
import { Mentee, MenteeCreation } from "~/types";

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

export { getMentees, createMentee }
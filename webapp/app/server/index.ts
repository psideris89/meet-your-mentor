import { getCourses, getCourse, createCourse } from "~/server/course.server";
import { getMentees, createMentee } from "~/server/mentee.server";
import { getMentors, createMentor } from "~/server/mentor.server";

const API_BASE_URL = "http://localhost:8080/api";

export { API_BASE_URL, getCourses, getCourse, createCourse, getMentors, createMentor, getMentees, createMentee }
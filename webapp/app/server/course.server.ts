import {Course} from "~/types";
import axios from "axios";

async function getCourses(): Promise<Course[]> {
    try {
        return (await axios.get("http://localhost:8080/api/courses")).data
    } catch (err) {
        return Promise.resolve([] as Course[])
    }
}

async function getCourse(id: number): Promise<Course> {
    try {
        return (await axios.get(`http://localhost:8080/api/courses/${id}`)).data
    } catch (err) {
        return Promise.resolve({} as Course)
    }
}

export {getCourses, getCourse}
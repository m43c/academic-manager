import axios from "./axios";

export const requestCreateStudent = (student) =>
    axios.post("/add-student", student);

export const requestReadStudents = () => axios.get("/students");

export const requestReadStudent = (id) => axios.get(`/student/${id}`);

export const requestUpdateStudent = (id, student) =>
    axios.put(`/student/${id}`, student);

export const requestDeleteStudent = (id) => axios.delete(`/student/${id}`);

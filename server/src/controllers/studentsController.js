import Student from "../models/studentModel.js";

export const createStudent = async (req, res) => {
    try {
        const { name, lastName, subject, subjectGrades } = req.body;

        const newStudent = new Student({
            name,
            lastName,
            subject,
            subjectGrades,
        });

        const savedStudent = await newStudent.save();
        return res.json(savedStudent);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
};

export const readStudents = async (req, res) => {
    try {
        const students = await Student.find();
        return res.json(students);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
};

export const readStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        return res.json(student);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        return res.json(updatedStudent);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        if (!deletedStudent) {
            return res.status(404).json({ message: "Student not found" });
        }

        return res.json(deletedStudent);
    } catch (error) {
        return res.status(404).json({ message: error });
    }
};

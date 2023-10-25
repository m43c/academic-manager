import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    subject: {
        type: String,
        required: true,
        trim: true,
    },
    subjectGrades: {
        type: String,
        required: true,
        trim: true,
    },
});

export default mongoose.model("Student", studentSchema);

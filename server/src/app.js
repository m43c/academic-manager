import express from "express";
import morgan from "morgan";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();

app.use(
    cors({
        origin: "http://10.0.2.2:8081",
    })
);
app.use(morgan("dev"));
app.use(express.json());
app.use("/api", studentRoutes);

export default app;

import express, { Request, Response, Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "./utils/connectDb";
import postRouter from "./routers/postRouter";

const app: Application = express();

//Configuation
dotenv.config();
connectDb();

// middlewares
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Routes
app.use("/posts", postRouter);
app.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello from server" });
});

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

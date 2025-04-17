import express from "express"
import apiRouter from "./routes/index.js"
import cors from "cors"
import JWT_SECRET from "./config.js"
const app = express();
app.use(cors());
app.use("/api/v1", apiRouter);

app.listen(3000, () => console.log("Server running successfully"));


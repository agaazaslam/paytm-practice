import { Router } from "express"
import userRouter from "./user.js"
const apiRouter = Router();

apiRouter.use("/user", userRouter);


apiRouter.get("/", (request, response) => {
  console.log("Route API version 1 working successfully");
  response.send("Route API version 1 working successfully");
});

export default apiRouter;



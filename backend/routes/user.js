import { Router } from "express"

const userRouter = Router();



userRouter.get("/", (request, response) => {
  console.log("User Route working successfully");
  response.send("User Route working successfully");
});

export default userRouter;



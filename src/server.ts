import "reflect-metadata";

import express from "express";
import cors from "cors";
import routes from "./routes";

import "./database";

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

routes.post("/users", (request, response) => {
  const { name, email } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});

app.listen(3333);

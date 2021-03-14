import express, { Request, Response } from "express";

const routes = express.Router();

routes.get("/clients", (request: Request, response: Response) => {
  return response.send("/clients");
});

export default routes;

import express, { Request, Response } from "express";

const routes = express.Router();

routes.get("/pieces", (request: Request, response: Response) => {
  return response.send("/pieces");
});

export default routes;

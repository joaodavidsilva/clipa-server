import express, { Request, Response } from "express";

const routes = express.Router();

routes.get("/services", (request: Request, response: Response) => {
  return response.send("/services");
});

export default routes;

import * as express from "express";

class Middleware {
  constructor(app: express.Application) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
  }
}

export default Middleware;

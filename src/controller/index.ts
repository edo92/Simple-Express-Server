import * as express from "express";
import routes from "./routes";

class Routes {
  constructor(app: express.Application) {
    app.use(routes);
  }
}

export default Routes;

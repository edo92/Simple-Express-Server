import * as express from "express";
import Controller from "./controller";
import Middleware from "./middleware";

interface IServer {
  start: () => void;
  app: express.Application;
}

export class Server implements IServer {
  private readonly port: number;
  public app: express.Application;

  constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  public start(): express.Application {
    this.dependencies();
    this.createServer();
    return this.app;
  }

  private dependencies() {
    new Controller(this.app);
    new Middleware(this.app);
  }

  private createServer(): void {
    this.app.listen(this.port, () => {
      console.log(`🚀 Listening on port ${this.port}`);
    });
  }
}

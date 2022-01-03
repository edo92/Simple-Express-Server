import * as express from "express";
import * as supertest from "supertest";
import routes from "../src/controller/routes";

const app = express();
app.use("/", routes);

describe("Testing Routes", () => {
  it("GET /", async () => {
    const res = await supertest(app).get("/");
    expect(res.status).toBe(200);
  });

  it("GET /test", async () => {
    const res = await supertest(app).get("/test");
    expect(res.status).toBe(200);
  });
});

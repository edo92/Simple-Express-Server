import { Router } from "express";

const router = Router();

router.get("/", (_, res) => {
  res.send("Root Route !!");
});

router.get("/test", (_, res) => {
  res.send("Test Route !!");
});

export default router;

import { Request, Response } from "express";
import Router from "express-promise-router";

const router = Router();

router.get("/", async (_req: Request, res: Response): Promise<void> => {
  res.send(`Hi first endpoint!`);
});

router.get("/status", async (_req: Request, res: Response): Promise<void> => {
  res.send(`Hi status endpoint!`);
});

export default router;

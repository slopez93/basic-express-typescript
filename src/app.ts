import express, { Request, Response } from "express";
import Router from "express-promise-router";

import commonRoutes from "./api/routes/common.route";

const app = express();
const router = Router();

app.use(router);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.use('/', commonRoutes);

router.use((err: Error, req: Request, res: Response, next: Function) => {
  res.status(403).send(err.message);
});

export default app;

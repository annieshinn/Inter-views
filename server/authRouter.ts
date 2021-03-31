/**
 * 
 * This router handles everything at the /auth endpoint
 * 
 */

import express, { Request, Response, NextFunction, Errback } from "express";
const authRouter = express.Router()
const authController = require('./authController.ts')

authRouter.post('/',
  authController.login,
  (req: any, res: any, next: any) => {
    res.json(res.locals.message)
});

module.exports = authRouter;

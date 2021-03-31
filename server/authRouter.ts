/**
 * 
 * This router handles everything at the /auth endpoint
 * 
 */

import express, { Request, Response, NextFunction, Errback } from "express";
const authRouter = express.Router()
const authController = require('./authController.ts')

// POST to /auth/login
authRouter.post('/login',
  authController.login,
  (req: Request, res: Response, next: NextFunction) => {
    res.json(res.locals.message)
});

// POST to /auth/signup
authRouter.post('/signup',
  authController.signup, 
  (req: Request, res: Response, next: NextFunction) => {
    res.json(res.locals.user)
})

module.exports = authRouter;

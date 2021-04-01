/**
 * 
 * This router handles everything at the /auth endpoint
 * 
 */

import express, { Request, Response } from "express";
const authRouter = express.Router()
const authController = require('./authController.ts')

const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;

// POST to /auth/login
authRouter.post('/login',
  authController.login,
  (req: Request, res: Response) => {
    res.json(res.locals.message)
});

// POST to /auth/signup
authRouter.post('/signup',
  authController.signup, 
  (req: Request, res: Response) => {
    res.json(res.locals.user)
})

// GET to /auth/googleSignup
authRouter.get('/googleSignup',
  passport.authenticate('google', {scope: ['profile']}),
  // authController.googleSignup,
  (req: Request, res: Response) => {
    res.json({message: 'logged in'})
  })

module.exports = authRouter;

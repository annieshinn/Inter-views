/**
 * 
 * This router handles everything at the /auth endpoint
 * 
 */

import express, { Request, Response } from "express";
const authRouter = express.Router();
const passport = require('passport');
const authController = require('../controllers/authController.ts')

// POST to /auth/signup
authRouter.post('/signup',
  authController.signup, 
  (req: Request, res: Response) => {
    res.json(res.locals.user);
})

// POST to /auth/login
authRouter.post('/login',
  authController.login,
  (req: Request, res: Response) => {
    res.json(res.locals.message);
});

// GET /auth/google
//   After authorization, Google will redirect the user
//   back to this application at /auth/google/callback
authRouter.get('/google',
  passport.authenticate('google', {scope: ['profile', 'email']})
);

// GET /auth/google/callback
//   If authentication fails, the user will be redirected back to the login page.
//   Otherwise, the primary route function function will be called,
authRouter.get('/google/callback', 
  passport.authenticate('google'),
  authController.userIdCookie,
  function(req, res) {
    res.cookie('user-id', res.locals.userId).redirect('/home');
  });

module.exports = authRouter;

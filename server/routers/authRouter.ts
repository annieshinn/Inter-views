/**
 * 
 * This router handles everything at the /auth endpoint
 * 
 */

import express, { Request, Response } from "express";
const authRouter = express.Router()
const authController = require('./authController.ts')

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

/* OAUTH */
passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: "http://localhost:8000/home"
},
function(accessToken: any, refreshToken: any, profile: any, cb: any) {
  console.log('hi')
  // console.log(accessToken, refreshToken, profile, cb);
  // User.findOrCreate({ googleId: profile.id }, function (err: any, user: any) {
  //   return cb(err, user);
  // });
}
));

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

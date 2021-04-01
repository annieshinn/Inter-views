/**
 * 
 * This router handles everything at the /auth endpoint
 * 
 */

import express, { Request, Response } from "express";
const authRouter = express.Router()
const authController = require('../controllers/authController.ts')

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

/* OAUTH */
passport.use(new GoogleStrategy({
  clientID: '554937945719-uhft55oe7gf10a2f6s070ronf6m6g6jl.apps.googleusercontent.com',
  clientSecret: 'BmCZCKPXLHw9kIPw7I9KKFm0',
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
    res.cookie('id', res.locals.id, {httpOnly: true}).json(res.locals.message)
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

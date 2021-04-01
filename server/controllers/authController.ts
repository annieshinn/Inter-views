/*
 *
 * authController object holds the methods to make sql queries re: users
 *  - we can log in, create an account, etc.
 *
 */

import express, { Request, Response, NextFunction, Errback } from "express";
const db = require('../dataModels.ts')
const bcrypt = require('bcrypt')
const saltRounds = 10;

const authController = {
  login: function(req: Request, res: Response, next: NextFunction): any { },
  signup: function(req: Request, res: Response, next: NextFunction): any { },
  googleSignup: function(req: Request, res: Response, next: NextFunction): any { }
};

authController.login = (req, res, next) => {
  const { username, password } = req.body;
  const checkUser = 'SELECT username, password FROM users WHERE username = $1';

  db.query(checkUser, [username])
    .then(async (data: any) => {
      // username doesn't exist
      if (data.rows.length === 0) {
        res.locals.message = 'username does not exist.';
        return next();
      }

      const hashedPassword = data.rows[0].password;
      const match = await bcrypt.compare(password, hashedPassword);

      // check that password is wrong
      if (!match) {
        res.locals.message = 'wrong password.';
        return next();
      }

      // check that password is correct
      if (match) {
        res.locals.message = 'logged in!';
        return next();
      }

      res.locals.message = 'something went wrong.';
      return next();
    })
    .catch((err: any) => {
      return next({
         log: 'Error in authController.login',
         status: 500,
         message: {err},
      })
    });
};

authController.signup = async (req, res, next) => {
  const { username, password, email } = req.body;
  const signup = 'INSERT INTO users(username, password, email) VALUES($1, $2, $3) RETURNING *';
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  db.query(signup, [username, hashedPassword, email])
    .then((data: any) => {
      res.locals.user = data.rows[0];
      return next();
    })
    .catch((err: any) => {
      return next({
        log: 'Error in authController.signup',
        status: 500,
        message: {err},
      })
    })
};

authController.googleSignup = (req, res, next) => {
  
}

module.exports = authController;

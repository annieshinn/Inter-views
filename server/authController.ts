/*
 *
 * authController object holds the methods to make sql queries re: users
 *  - we can log in, create an account, etc.
 *
 */

const express = require('express')
const db = require('./models/dataModels.ts')

const authController = {
  login: function(req: any, res: any, next: any): any { }
};

authController.login = (req, res, next) => {
  const { username, password } = req.body
  const checkUser = 'SELECT username, password FROM users WHERE username = $1';

  db.query(checkUser, [username])
    .then((data: any) => {
      // username doesn't exist
      if (data.rows.length === 0) {
        res.locals.message = 'username does not exist.';
        return next();
      }

      // check that password is wrong
      if (data.rows[0].password !== password) {
        res.locals.message = 'wrong password.';
        return next();
      }

      // check that password is correct
      if (data.rows[0].password === password) {
        res.locals.message = 'logged in!';
        return next();
      }
    })
    .catch((err: any) => {
      return next({
         log: 'Error in authController.login',
         status: 500,
         message: {err},
      })
    });
};

module.exports = authController;

/*
 *
 * cardController object holds the methods to make sql queries re: cards
 *  - we can add card, delete card, update card, and get cards
 *
 */

import express, { Request, Response, NextFunction, Errback } from "express";
const db = require('../dataModels')


const cardController = {
  addCard: function(req: Request, res: Response, next: NextFunction): any { },
  getCard: function(req: Request, res: Response, next: NextFunction): any { },
  deleteCard: function(req: Request, res: Response, next: NextFunction): any { }
};

cardController.addCard = (req, res, next) => {
  const { user_id, company, event_name, event_date, phone_screen, tech_interview, status='pending' } = req.body;
  const addCard = 'INSERT INTO \
  opportunity(user_id, company, event_name, event_date, phone_screen, tech_interview, status) \
  VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *'
  const values = [user_id, company, event_name, event_date, phone_screen, tech_interview, status]
  
  db.query(addCard, values)
    .then((data: any) => {
     res.locals.newCard = data.rows[0] 
     return next();
    })
    .catch((err: any) => {
      return next({
         log: 'Error in cardController.addCard',
         status: 500,
         message: {err},
      })
    });
};

module.exports = cardController;

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
  getCards: function(req: Request, res: Response, next: NextFunction): any { },
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

cardController.getCards = (req, res, next) => {
  const { id } = req.params;
  const getCards = 'SELECT * FROM opportunity WHERE user_id = $1'

  db.query(getCards, [id])
    .then((data: any) => {
      res.locals.allCards = data.rows
      return next()
    })
    .catch((err: any) => {
      return next({
         log: 'Error in cardController.getCards',
         status: 500,
         message: {err},
      })
    });
};

cardController.deleteCard = (req, res, next) => {
  const { id } = req.params // this is the id of the card to be deleted
  const deleteCard = 'DELETE FROM opportunity WHERE _id = $1'

  db.query(deleteCard, [id])
    .then((data: any) => {
      return next()
    })
    .catch((err: any) => {
      return next({
         log: 'Error in cardController.deleteCard',
         status: 500,
         message: {err},
      })
    });
};

module.exports = cardController;

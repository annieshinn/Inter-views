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
  deleteCard: function(req: Request, res: Response, next: NextFunction): any { },
  updateCard: function(req: Request, res: Response, next: NextFunction): any { },
};

cardController.addCard = (req, res, next) => {
  const { company, event_name, event_date, phone_screen, tech_interview, status='pending' } = req.body;
  const idCookie = req.headers.cookie;
  const user_id = idCookie?.split('=').pop();

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
  const idCookie = req.headers.cookie;
  const user_id = idCookie?.split('=').pop();
  const getCards = 'SELECT * FROM opportunity WHERE user_id = $1'

  db.query(getCards, [user_id])
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
  const { id } = req.params 
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

cardController.updateCard = (req, res, next) => {
  const { id } = req.params
  const idCookie = req.headers.cookie;
  const user_id = idCookie?.split('=').pop();

  const { company, event_name, event_date, phone_screen, tech_interview, status='pending' } = req.body
  const deleteCard = 'UPDATE opportunity \
    SET company = $2, event_name = $3, event_date = $4, phone_screen = $5, tech_interview = $6, status = $7, user_id = $8 \
    WHERE _id = $1 RETURNING *'

  db.query(deleteCard, [id, company, event_name, event_date, phone_screen, tech_interview, status, user_id])
    .then((data: any) => {
      res.locals.updatedCard = data.rows[0];
      return next();
    })
    .catch((err: any) => {
      return next({
         log: 'Error in cardController.updateCard',
         status: 500,
         message: {err},
      })
    });
};

module.exports = cardController;

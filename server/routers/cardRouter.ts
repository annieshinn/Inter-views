/**
 * 
 * This router handles everything at the /card endpoint
 * 
 */

import express, { Request, Response } from "express";
const cardRouter = express.Router()
const cardController = require('../controllers/cardController.ts')

// POST to make new card
cardRouter.post('/',
  cardController.addCard,
  (req: Request, res: Response) => {
    res.json(res.locals.newCard)
});

// GET to get all the cards (to render on front-end)
cardRouter.get('/:id',
  cardController.getCards,
  (req: Request, res: Response) => {
    res.json(res.locals.allCards)
});

// DELETE to delete a singular card
cardRouter.delete('/',
  // cardController.deleteCard,
  (req: Request, res: Response) => {
    res.json({message: 'card deleted'})
});

// UPDATE a card
cardRouter.put('/',
  // cardController.updateCard,
  (req: Request, res: Response) => {
    res.json(res.locals.updatedCard)
});

module.exports = cardRouter;

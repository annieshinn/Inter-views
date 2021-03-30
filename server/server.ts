import express, { Request, Response, NextFunction, Errback } from "express";
import path from "path";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

app.use(express.static('dist'));
// app.use(express.static('styles'));
app.get('/styles.css', (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '../src/styles/styles.css'))
});

app.get('/', (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '../index.html'));
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});
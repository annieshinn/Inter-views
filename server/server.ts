import express, { Request, Response, NextFunction, Errback } from "express";
import path from "path";
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const authRouter = require('./authRouter')

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true} ));

if (process.env.NODE_ENV === 'production') {
  // statically serve everything in the dist folder ONLY if production mode
  app.use(express.static('dist'));
};

app.get('/styles.css', (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '../src/styles/styles.css'))
});

app.get('/', (req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '../index.html'));
});

/* ROUTERS */
app.use('/auth', authRouter);

/* OAUTH */
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://www.example.com/auth/google/callback" // we need to replace this
  },
  function(accessToken: any, refreshToken: any, profile: any, cb: any) {
    // User.findOrCreate({ googleId: profile.id }, function (err: any, user: any) {
    //   return cb(err, user);
    // });
  }
));

/* 404 REQUEST NOT FOUND */
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('requested file not found')
})

/* GLOBAL ERROR HANDLER */
app.use((err, req: Request, res: Response) => {
  const defaultError = {
    log: 'Express error on middleware',
    status: 500,
    message: {err: 'An error occured'}
  };
  const errorObj = {...defaultError, ...err};
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
});

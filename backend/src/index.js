import express from 'express'
import session from 'express-session'
import cors from 'cors'

const app = express();
app.use(cors())
  .use(
  session({
    cookie: {
      sameSite: 'lax',
      maxAge: 604800000,
      secure: false,
      httpOnly: false,
    },
    secret: "secret",
    saveUninitialized: false,
    resave: true,
  }),
);

app.get("/", (req, res) => {
  console.log(req.sessionID)
  req.session.coolthing = 1;
  return res.status(200).send("done");
})

app.listen(1000)
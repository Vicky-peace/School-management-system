import express from "express";
import bodyParser from "body-parser";
import  Jwt  from "jsonwebtoken";
import cors from 'cors';
import config from "./db/config.js";


// Import routes here


const app = express();

// Middleware here
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Enable cors for all routes to communicate wit the frontend
app.use(cors());

// Jwt middleware

app.use((req, res, next) => {
    if (
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "JWT"
    ) {
      jwt.verify(
        req.headers.authorization.split(" ")[1],
        config.SECRET,
        (err, decode) => {
          if (err) req.user = undefined;
          req.user = decode;
          next();
        }
      );
    } else {
      req.user = undefined;
      next();
    }
  });

app.get("/", (req,res) =>{
    res.send("Hello Welcome to My API")
});

app.listen(config.port, () =>{
    console.log(`Server is listening on port ${config.port}`);
});
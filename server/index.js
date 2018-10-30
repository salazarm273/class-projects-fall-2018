const express = require('express');
const game = require('./game/controller');

const app = express();

const port = 80;
const server = "localhost";


  app.listen(3000);


  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, PlayerID");
    next();
  });

  app.use(express.json());
  app.use(express.urlencoded({extended: true}));
  app.use("/", express.static(__dirname + "/../client/"));
  app.use('/game', game);
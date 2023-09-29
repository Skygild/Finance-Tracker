const ConnectDB = require("./database/connectDB");
const express = require("express");
const router = require("./router/transactionRoutes");
require("dotenv").config();

class Server {
  #port = 3001;
  connectDB = new ConnectDB();
  app = express();

  start = async () => {
    this.app.use(express.json()); // Parse incoming JSON data
    this.app.use(express.urlencoded({ extended: false })); // To parse incoming data sent in the HTTP req for us to manage

    //Routes
    this.app.use("/balance/", router);

    // Start server
    this.app.listen(this.#port, () => {
      console.log(`App is listening to port: ${this.#port}`);
    });
    this.connectDB.connect(process.env.URL);
  };
}

const server = new Server();

server.start();

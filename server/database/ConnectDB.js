const mongoose = require("mongoose");

class ConnectDB {
  constructor(url) {
    this.url = url;
  }

  async connect(url) {
    try {
      await mongoose.connect(url);
      console.log("Connected DB");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ConnectDB;

const mongoose = require("mongoose");

class Balance {
  BalanceSchema = new mongoose.Schema({
    totalBalance: {
      type: Number,
    },
    savings: {
      type: Number,
    },
    spending: {
      type: Number,
    },
    history: [{ type: Number }],
  });
  BalanceModel = mongoose.model("Balance", this.BalanceSchema);
}

const balanceInstance = new Balance();

module.exports = balanceInstance.BalanceModel;

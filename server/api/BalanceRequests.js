const Balance = require("../model/Balance");

class BalanceRequest {
  postBalance = async (req, res) => {
    try {
      let { savings, spending } = req.body;
      let history = [];
      const id = req.params.id;
      const getBalance = await Balance.findById(id);
      let newTotalBalance = getBalance.totalBalance;

      if (savings) {
        newTotalBalance += savings;
        history.push(savings);
      } else if (spending) {
        newTotalBalance -= spending;
        history.push("-" + spending);
      }

      const newUpdated = await Balance.findByIdAndUpdate({ _id: id }, { $push: { history: history }, $set: { totalBalance: newTotalBalance } }, { new: true });

      res.status(201).json(newUpdated);
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = BalanceRequest;

const express = require("express").Router;
const router = express();
const BalanceRequest = require("../api/BalanceRequests");
const balance = new BalanceRequest();

router.route("/:id").patch(balance.postBalance);

module.exports = router;

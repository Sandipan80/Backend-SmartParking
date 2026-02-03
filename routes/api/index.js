const Waiter = require("express").Router()
const adhaarTeam = require("./AdhaarTeam.route");

Waiter.use("/adhaarTeam",adhaarTeam)

module.exports = Waiter;
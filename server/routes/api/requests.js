const router = require("express").Router();

// Request model
const Request = require("../../models/Request");

router.get("/", (req, res) => {
  Request.find();
});

module.exports = router;

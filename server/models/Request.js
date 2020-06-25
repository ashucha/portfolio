const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RequestSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});

module.exports = Request = mongoose.model("request", RequestSchema);

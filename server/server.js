if (process.env.NODE_ENV !== "production") require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

// DB connection
const dbURI = process.env.DB_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const app = express();

const requests = require("./routes/api/requests");

app.use(express.json());
app.use("/api/requests", requests);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

const express = require("express");
const cors = require("cors");
const mongoSanitize = require('express-mongo-sanitize');
const app = express();
const port = 8000;
const db = require("./database");

app.use(cors());
app.use(mongoSanitize());

app.get("/api/search/:search", (req, res) => {
  db.airports
    .find(
      { $text: { $search: `/^${req.params.search}$/i` } },
      { score: { $meta: "textScore" } }
    )
    .sort({ score: { $meta: "textScore" } })
    .exec()
    .then((results) => res.json(results));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});

const express = require("express");
const app = express(); //khởi tạo function
const port = 3000;

app.get("/tin-tuc", (req, res) => res.send("Hello"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);

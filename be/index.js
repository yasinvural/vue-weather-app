const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router");
const port = 3001;

// middlewares
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

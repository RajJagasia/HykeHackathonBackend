
const express = require("express");
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const loginRouter = require("./py.js");

console.log("index.js");
app.post("/api", loginRouter.testPythonAPI);


app.listen(3000, () => {
    console.log("Listening on port 3000.");
  });
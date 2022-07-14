const express = require('express');
const app = express();
const morgan = require("morgan");
const sender = require('../Mail/senderRoute');


app.use(morgan("tiny"));
console.log("Morgan was enabled...");

app.use(express.json());
app.use("/api/sender", sender);

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
  console.log(`connecting to ${port} ...`);
});

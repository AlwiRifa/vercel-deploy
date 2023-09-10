const express = require("express");
const cors = require("cors");

const app = express();

app.use("/", (req, res) => {
  res.send("server is running ");
});

const PORT = 5000;
app.listen(PORT, console.log(`server is running on port ${PORT}`));

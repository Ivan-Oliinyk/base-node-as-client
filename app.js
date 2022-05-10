require("dotenv").config();
const express = require("express");
const path = require("path");
const router = express.Router();

const PORT = process.env.PORT || 5555;
const app = express();

app.use(express.static(__dirname + "/public"));

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

router.post("/:obj", (req, res) => {
  console.log("first");
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`server run on port ${PORT}`);
});

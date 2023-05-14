const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors({
  origin:"http://localhost:3000",
}))

const PORT = process.env.PORT || 8000;

app.use("/auth", require("./app/routes/userAuth"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

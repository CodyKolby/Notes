const express = require("express");
const app = express();
const mainRouter = require("./routers/main");

app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(mainRouter);

app.listen(3000, () => {
  console.log("server is up at 3000");
});

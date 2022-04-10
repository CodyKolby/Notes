const express = require("express");
const app = express();
const NoteRouter = require("./routers/notes");
const UserRouter = require("./routers/users");

app.set("view engine", "ejs");
app.use("/public", express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(NoteRouter);
app.use(UserRouter);

app.listen(3000, () => {
  console.log("server is up at 3000");
});

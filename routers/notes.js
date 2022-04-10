const express = require("express");
const router = new express.Router();
const Note = require(`../models/note`);
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api");

router.get("", async (req, res) => {
  try {
    const notes = Note.find({})
      .then((notes) => {
        if (notes.length > 0) {
          res.render("../public/main.ejs", {
            notes: notes,
          });
        } else {
          res.render("../public/main.ejs", {
            notes: 0,
          });
          console.log();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {}
});

router.get("/notes", async (req, res) => {
  res.render("../public/notes.ejs");
});
router.post("/notes", async (req, res) => {
  const note = new Note({
    title: req.body.title,
    description: req.body.description,
    _id: req.body._id,
  });
  console.log("before try");
  try {
    await note.save();

    Note.find({})
      .then((notes) => {
        console.log(notes);
      })
      .catch((e) => {
        console.log(e);
      });

    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
});

// router.delete("/notes/delete/:id", function (req, res) {
//   var id = req.params.id;
//   db.get().createCollection("menu", function (err, col) {
//     col.deleteOne({ _id: new mongodb.ObjectID(id) });
//   });
//   console.log(id);
//   res.render("../public/notes.ejs");
// });

router.get("/notes/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    let response = await Note.findByIdAndDelete(id);
    console.log(response);
    res.redirect("back");
  } catch (e) {}
});

router.post("/notes/delete/:id", async (req, res) => {
  await res.redirect("");
});

module.exports = router;

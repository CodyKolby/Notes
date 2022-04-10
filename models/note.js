const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;

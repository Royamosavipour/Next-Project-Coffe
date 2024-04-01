const mongoose = require("mongoose");
require("./Product");

const schema = new mongoose.Schema({
  username: { type: String, require: true },
  bod: { type: String, require: true },
  email: { type: String, require: true },
  score: { type: Number, require: true },
  date: { type: Date, default: () => new Date.now(), immutable: false },
  product: { type: mongoose.Types.ObjectId, ref: "Product" },
});

const model = mongoose.models.Comment || mongoose.model("Comment", schema);
export default model;

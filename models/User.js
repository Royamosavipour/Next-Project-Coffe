const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: false },
  phone: { type: String, require: true },
  password: { type: String, require: false },
  role: { type: String, default: "USER" },
  refreshToken:String
});


export default 

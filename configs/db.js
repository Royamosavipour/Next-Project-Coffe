const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      return true;
    } else {
      await mongoose.connect(process.env.MONGO_URL);
      console.log("Connet to database is successfully");
    }
  } catch (error) {
    console.log("DB conection has Error ->", error);
  }
};

export default connectToDB;

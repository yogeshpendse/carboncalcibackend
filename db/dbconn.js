const mongoose = require("mongoose");
const URI = process.env.URI;
const mySecret = process.env['URI']
const connecttoDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("DB connected")
  } catch (error) {
    console.log(error);
  }
}
module.exports = connecttoDb;

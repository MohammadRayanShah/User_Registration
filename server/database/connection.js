const mongoose = require("mongoose");
MONGO_URI =
  "mongodb+srv://admin:admin123@cluster0.yhrvk.mongodb.net/users?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const con = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    console.log(`MongoDB connected ${con.connection.host}`);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;

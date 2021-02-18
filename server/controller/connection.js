const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const con = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch {}
};

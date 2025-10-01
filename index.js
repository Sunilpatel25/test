const express = require("express");
const mongoose = require("mongoose");

const songRoute = require("./routes/songRoute");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect(
  "mongodb+srv://savaliyasunil25_db_user:123@cluster1.96n9rvq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use("/song", songRoute);

app.listen(PORT, () => {
  console.log("Server started at port http://localhost:" + PORT);
});

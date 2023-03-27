// config inicial
require("dotenv").config();
const express = require("express");
// const cors = require("cors");
const app = express();

// depois do db
const mongoose = require("mongoose");

// app.use(cors());

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rotas
const personRouters = require("./Routes/PersonRouters");
app.use("/person", personRouters);

app.get("/", (req, res) => {
  res.json({ message: "Oi Express!" });
});

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);
const conexaoBanco = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.5fnzkhj.mongodb.net/test`;
mongoose
  .connect(conexaoBanco)
  .then(() => {
    app.listen(3000, () => {
      console.log("server online");
    });
  })
  .catch((err) => console.log(err));

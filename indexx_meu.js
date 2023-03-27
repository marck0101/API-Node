const express = require("express"); // importando CoreModule e passando para const
const app = express(); // iniciando express com uma função
const mongoose = require("mongoose"); // importando CoreModule e passando para const
const Person = require("./Models/Person");
const DB_USER = "marcoshenrique";
const DB_PASSWORD = encodeURIComponent("Kopn6lci4zTTOmp0");
const banco = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.5fnzkhj.mongodb.net/test`;

// forma de ler JSON // middlewares -> são executadas entre as ações de requisições e respostas
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json()); // agora pode ler json, enviar e receber

// app.post("/person", async (req, res) => {
// //   const id = req.params.id;
//   const { name, salary, approved } = req.body;

//   const person = {
//     name,
//     salary,
//     approved,
//   };

//   try {
//     await Person.create(person);

//     res.status(201).json({ message: "Pessoa inserida no sistema com sucesso" });
//   } catch (error) {
//     res.status(500).json({ erro: error });
//   }
// });

app.get("/", (req, res) => {
  res.json({ message: "oi Express" });
});
// console.log('banco', banco)

// mongoose.connect(banco)
//   .then(() => {
//     console.log("Conectou ao MongoDB");
//     app.listen(3000);
//   })
//   .catch((err) => {
//     console.log(err);
//   });


mongoose
  .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.5fnzkhj.mongodb.net/test`

  )
  .then(() => {
    console.log("Conectou ao banco!");
    app.listen(3000);
  })
  .catch((err) => console.log(err));
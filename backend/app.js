require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT

const app = express();

// Config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Solve CORS
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// db connection
const conn = require('./config/db');
conn();

// Ensure DB connection is established before starting the server
conn().then(() => {
  // Test route
  app.get("/", (req, res) => {
    res.send("API Working!");
  });

  // routes
  const router = require("./routes/Router.js");

  app.use(router);

  app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
  });
}).catch((error) => {
  console.error("Falha ao conectar ao banco de dados:", error);
});
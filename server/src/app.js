const express = require("express");
const cors = require("cors");
const apiRoutes = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "mybookshelf-api" });
});

// Todas las rutas de la API van aquí:
app.use("/api", apiRoutes);

module.exports = app;

const express = require("express");
const cors = require("cors");
const { mainController, healthzController } = require("./controllers");

const colors = require("colors");
colors.enable();
require("dotenv").config();

const app = express();

// ================================= MIDDLEWARES =======================================
app.use(cors())
app.use(express.json())

// ==================================== ROUTES =========================================
app.get("/", mainController);
app.get("/healthz", healthzController);

// ================================ ERROR CATCHERS =====================================
app.use((req, res) => {
    res.status(404).json({message: "Not found"});
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({status: err.status, message: err.message});
})

module.exports = { app, colors };

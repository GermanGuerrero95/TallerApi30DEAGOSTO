const express = require("express")
const morgan = require("morgan")

// -------------------------                 IMPORTACION A LA BASE DE DATOS
const db = require("./database")

//---------------------------                 IMPORTACION RUTAS
const UsersRoutes = require("./routes/users.routes")

//------------------------------------------- MODULO EXPRESS
const app = express()

//variable con el puerto 1000 clase 5000
const port = 1000;

//----------------------------------------------------middlewares (morgan)
app.use(morgan("dev"));
app.use(express.json());

//--------------------------------------------------------routes

app.listen(port, () => console.log("Api corriendo correctamente"))
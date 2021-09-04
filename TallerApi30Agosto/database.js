const mongoose = require("mongoose")

const atlas = "mongodb+srv://mongo1:german950901@cluster0.zgn87.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//const local = "mongodb://user:pass@localhost:27017/empresaDB"
const local = "mongodb://localhost:27017/empresaDB"

mongoose.connect(local, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Te has conectado correctamente a la base de datos "))
    .catch(err => console.log(err))

module.exports = mongoose;
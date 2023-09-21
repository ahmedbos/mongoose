const express = require('express')
const app = express()
const PORT = 5000
const mongoose = require ('mongoose')

app.use(express.json())

mongoose.connect('mongodb+srv://amdbs:<409d|L|cxW8LiCBj>@cluster0.e8r7s9i.mongodb.net/mongoose-cp?retryWrites=true&w=majority')
.then(()=> console.log("database connescted"))
.catch((err)=> {if (err)throw err})
app.listen(PORT , ()=>console.log ("listening on port", PORT))


app.use('/api ', require('/routes/contactRoutes'))
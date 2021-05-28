import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import getData from './route/getData.js'
const app = express();

app.use(bodyParser.json({limit: "20mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "20mb", extended: true}))
app.use(cors());

app.use('/getData',getData);

const PORT = process.env.PORT || 5000;
const uri = "mongodb+srv://tenzin:tenzin1234@cluster0.85j0b.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> app.listen(PORT, ()=>console.log("connected")))
.catch((err)=>console.log(err.message))

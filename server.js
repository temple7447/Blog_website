const express = require("express")
const app = express()
const mongoose = require("mongoose")
const Acticlerouter = require('./routes/articles')
const dotenv = require("dotenv")
dotenv.config()


app.set('view engine', 'ejs')
app.use( '/article',Acticlerouter)



app.get("/",(req,res)=>{
    // res.send("you are on the first page of my website thanks for you visiting")4
    const article = [{
        title:"text article",
        createAt: Date.now(),
        description: "text description"
    },
    {
        title:"text article2",
        createAt: Date.now(),
        description: "text description2"
    }]
    
    res.render('index.ejs' ,{ article:article})
})
const PORT = 3000
// const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`your device on port ${PORT}`)
})
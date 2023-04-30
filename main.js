const express = require('express')
const app = express()




app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))




app.get('/', function(req,res){
    res.render('index.ejs')
})


app.listen(6469, function(){
    console.log("server running")
})


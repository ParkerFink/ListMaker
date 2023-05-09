const express = require('express')
const app = express()




app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.static('css/'))

//const ip = '10.0.0.135'
const ip = '127.0.0.1'
const port = 6469


function clearList(){
    list.length  = 0
    res.redirect('/')
}


var list = []


app.get('/', function(req,res){
    res.render('index.ejs', {
        list: list
    })
})

app.post('/', function(req,res){
    let listItem = {
        item: req.body.item
    }

    list.push(listItem.item)
    console.log(list)

    res.redirect('/')
})





app.listen(port, ip, function(){
    console.log(`${ip}:${port}`)
})


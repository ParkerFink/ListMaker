const express = require('express')
const app = express()




app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))

const ip = '10.0.0.135'
const port = 6469


function clearList(){
    for (i in list){
        list.pop(i)
        console.log(list)
    }
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


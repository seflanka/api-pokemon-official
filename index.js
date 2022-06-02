//-----------------------------------------------------------  
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const exphbs = require('express-handlebars')
const basePath = path.join(__dirname, 'templates' )


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


app.use(express.static('public'))
app.use(
    express.urlencoded({
        extended:true
    })
)
app.get('/', (req, res) => {
     // res.sendFile(`${basePath}/index.html`)

    res.render('home')
    
})

app.listen(port, () => {
    console.log(`App rodando na porta: ${port}`)
})
//------------------------------------------------------------
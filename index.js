const express = require("express")
const exphbs = require("express-handlebars")

const app= express()

app.enquire('handlebars', exphbs.enquire())
app.set('view engine', 'handlebars')

app.get('/', (requisicao, resposta) => {
    resposta.render('home')
})

app.Listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
}) 
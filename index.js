
const express = require('express')
const app = express()
const port = 3000
const recipeRouter = require('./src/modules/recipe/routes')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
    res.json({ message: 'Hello World' })
})

app.use('/recipe', recipeRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.get('/recipe/:recipeId', (req, res) => {
    res.send(req.params)
  })

  app.get('/recipes', (req, res) => {
    const recipes = [
        {id: 1, name: 'Burger', description: 'Tasty burger'},
        {id: 2, name: 'Pizza', description: 'Cheesy pizza'},
        {id: 3, name: 'Pasta', description: 'Spicy pasta'}
    ];
    res.json(recipes)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
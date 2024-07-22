const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const recipeRouter = require('./src/modules/recipe/routes');
const doctorRouter = require('./src/modules/doctor/routes');
const articleRouter = require('./src/modules/article/routes');


app.use(cors()); // This will allow all CORS requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.use('/recipe', recipeRouter)
app.use('/article', articleRouter)
app.use('/doctor', doctorRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
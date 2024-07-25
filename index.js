const express = require('express');
const cors = require('cors');
const app = express();
const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
const port = 3000;
const recipeRouter = require('./src/modules/recipe/routes');
const doctorRouter = require('./src/modules/doctor/routes');
const articleRouter = require('./src/modules/article/routes');


app.use(cors()); // This will allow all CORS requests

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("dotenv").config();
const { OPEN_AI_ENDPOINT, OPEN_AI_SECRET, DEPLOY_ID } = process.env;

const client = new OpenAIClient(
    OPEN_AI_ENDPOINT,
    new AzureKeyCredential(OPEN_AI_SECRET)
);

app.post('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.use('/recipe', recipeRouter)
app.use('/article', articleRouter)
app.use('/doctor', doctorRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

app.post("/ /ask-bot", async (req, res) => {
    try {
        const result = await client.getChatCompletions(DEPLOY_ID, req.body);
        res.send(result.choices[0].message);
    } catch (error) {
        console.log(error);
        res.send("Error");
    }
});


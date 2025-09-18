import express from 'express';
import cors from 'cors';
import generate from './generate.js';

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.post('/api/generateRecipe', async (req, res) => {
    const { ingredients } = req.body;
    const recipe = await generate(ingredients);
    res.json(recipe)
});

app.listen(PORT, () => {
    console.log("Server Running...");
})
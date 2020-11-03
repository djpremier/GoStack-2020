import express from 'express';

const PORT = 3333;

const app = express();

app.get('/', (req, res) => {
    return res.json({
        message: 'Hello World!'
    })
})

app.listen(PORT, () => {
    console.log(`🚀 Server started on port ${PORT}!`);
})
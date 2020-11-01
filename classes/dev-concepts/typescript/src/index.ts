import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ message: 'Hello TypeScript'});
});

app.listen(3333);
import express from 'express';
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const userData =
    [
        {
            "name": "john",
            "age": 20
        },
        {
            "name": "Mek",
            "age": 28
        }
    ]

app.get('/user', (req, res) => {
    return res.json({ data: userData });
});

app.get('/test', (req, res) => {
    return res.json("Server is alert 🐶");
});
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hellooo from Express', port: PORT });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
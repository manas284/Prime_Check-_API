const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/isPrime', (req, res) => {
    const { number } = req.query;

    if (!number || isNaN(number)) {
        return res.status(400).json({ error: 'Invalid input: Please provide a number.' });
    }

    const n = parseInt(number, 10);

    if (n < 2) {
        return res.json({ number: n, isPrime: false });
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return res.json({ number: n, isPrime: false });
        }
    }

    return res.json({ number: n, isPrime: true });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');  // Require the path module

const app = express();
const port = 8282;

app.use(cors());

app.get('/', (req, res) => {
    const dataPath = path.join(__dirname, 'data.json');  // Construct the path to data.json
    const data = fs.readFileSync(dataPath, 'utf-8');
    res.json(JSON.parse(data));
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

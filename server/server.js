const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(`${__dirname}/../public/`))

const PORT = 3030;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
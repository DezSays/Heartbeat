const express = require('express');
const app = express();
const port = 3000;

app.get('/heartbeat', (req, res) => {
  res.send('heartbeat');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

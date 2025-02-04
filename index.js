const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, Node.js!');
});
//testing
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
<<<<<<< HEAD
//test restrictions
=======
//ss
//ee
>>>>>>> 75c5b8e267681c9fc3decb3c8f2229ee9f157347

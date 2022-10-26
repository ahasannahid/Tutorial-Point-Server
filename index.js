const express = require ('express');
const app = express();
const port = process.env.PORT || 5000;


app.get('/', (req,res) => {
    res.send('tutorial api running');
});

app.listen(port, () => {
    console.log('tutorial server running on port', port);
})
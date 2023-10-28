require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const author = process.env.APP_AUTHOR;

    res.render('index', {author});
})

app.listen(process.env.SERVER_PORT || 3000, (req, res) => {
    console.log(`server is running on http://${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}`);
})
const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan')
const app = express();
const PORT = process.env.PORT;
const path = require('path');
app.set("views", "./src/views")
app.set("view engine", "ejs")

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/")))
app.get("/", (req, res) => {
    res.render('index', { username: 'Framesuriya', customers: ['Frame1', 'Frame2', 'Frame3'] });
})
app.listen(PORT, () => {
    console.log('Listening on PORT ' + chalk.green(PORT));
})
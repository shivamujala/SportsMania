const express = require('express');
const app = express();
const port = 5000;

const userRouter = require('./routers/userRouter');

app.use(express.json());

app.use('/user', userRouter);

// routes
app.get('/', (req, res) => {
    res.send('Working Perfectly');
});

app.get('/home', (req, res) => {
    res.send('Response from Home');
});

app.get('/add', (req, res) => {
    res.send('Response from Add');
})

app.listen( port, () => { console.log('server started') } );
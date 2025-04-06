const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./src/connection.js');
const userRouter = require('./src/routes/authentication.js');
const { connect } = require('http2');

connectDB();

app.use(express.urlencoded( { extended: false }) );
app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

Port = 3000;

app.get('/',(req,res)=>{
    res.render('Home')
})


app.use('/user', userRouter);

app.listen(Port, () => {
  console.log(`Server is running on http://localhost:${Port}`);
}
);
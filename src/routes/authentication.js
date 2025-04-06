const {Router} = require('express');
const userRouter = Router();

const { getSignIn, postSignIn , getSignup, postSignup} = require('../controllers/authentication.js');


userRouter.get('/signup', getSignup)

userRouter.post('/signup',postSignup)

userRouter.get('/signin', getSignIn)

userRouter.post('/signin', postSignIn)

module.exports = userRouter;


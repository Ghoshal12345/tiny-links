import 'dotenv/config';
import express from 'express';
import connectDB from './connection.js';
import urlRouter from './routes/url.js';
import cookieParser from 'cookie-parser';
import {handleCheckAuthentication,checkAuth} from './middlewares/user.js';
import staticRouter from './routes/staticRoute.js';
import path from 'path';
import userRouter from './routes/user.js'
const app= express();
app.use(cookieParser());

// Database connection
connectDB("mongodb://127.0.0.1:27017/short-url-practice");

// view engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'))

// Middleware to parse form data
app.use(express.urlencoded({extended: true}))
app.use(express.json());

// routes
app.use('/url', handleCheckAuthentication, urlRouter);
app.use('/',checkAuth, staticRouter);
app.use('/user',  userRouter);

// server connection
app.listen(process.env.PORT, ()=>{ console.log("server started on port ", process.env.PORT)});
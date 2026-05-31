import 'dotenv/config';
import express from 'express';
import connectDB from './connection.js';
import urlRouter from './routes/url.js';
import cookieParser from 'cookie-parser';
import {checkForAuthentication,restrictToAuthenticatedUsers} from './middlewares/user.js';
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

// Check authentication first
app.use(checkForAuthentication);

// routes
app.use('/url', restrictToAuthenticatedUsers, urlRouter);
app.use('/', staticRouter);
app.use('/user', userRouter);


// server connection
const PORT = process.env.PORT || 8005;
app.listen(PORT, ()=>{ console.log("server started on port ", PORT)});
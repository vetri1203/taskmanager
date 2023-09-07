import express from 'express';
import { Login } from '../Component/Login.js';
import { Signup } from '../Component/Signup.js';
import { Todo } from '../Component/TodoPost.js';
import { Delete } from '../Component/TodoDelete.js';


const Routes = express.Router();


Routes.post('/login',Login);
Routes.post('/signup',Signup);
Routes.post('/post',Todo);
Routes.delete('/delete',Delete);

export default Routes;
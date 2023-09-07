import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Routes from './Router/Routes.js';
import Cors from 'cors';

const app = express();
app.use(bodyParser.json());

app.use(Routes);
app.use(Cors)

const url = `mongodb+srv://vetriveljaganathan5125:1234@cluster0.hfedl8p.mongodb.net/`;

const port = 8080;

mongoose.connect(url).then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log(err);
}
);

app.listen(port,()=>console.log(`app listening in port of ${port}`));

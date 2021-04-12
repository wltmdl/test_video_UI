import express from 'express';

import path from 'path';
import { home, login, videoPlayer } from './controller.js';

const __dirname=path.resolve()      //ES6 에서 __dirname 변수 사용하려면 정의를 따로 해야함.

const app = express();

app.use(express.static('public'))   //정적파일을 둘 폴더 public 과 그 안에 든 파일을 사용시, 경로 생략가능함.
app.use( express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{ res.sendFile( __dirname  + home()) });
app.post('/', login)

app.get('/login',(req,res)=>{ res.sendFile( __dirname  + '/login.html' ) });
app.get('/video', (req,res)=>{ res.sendFile( __dirname  + videoPlayer()) });

app.listen(3000);

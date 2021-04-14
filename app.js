import express from 'express';

import path from 'path';
import fs from "fs";

import { home, login, videoPlayer } from './controller.js';
import { get } from 'http';
import * as LOGIN from "./login.js";
import { getJSONfile, getJSONlist } from './DB_controller.js';

const __dirname=path.resolve()      //ES6 에서 __dirname 변수 사용하려면 정의를 따로 해야함.

const app = express();

app.use(express.static('public'))   //정적파일을 둘 폴더 public 과 그 안에 든 파일을 사용시, 경로 생략가능함.
app.use( express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req,res)=>{ res.sendFile( __dirname  + home()) });
app.post('/', login)

app.get('/login',(req,res)=>{ res.sendFile( __dirname  + '/login.html' ) });
app.post('/login', (req,res)=>{
    const { body : {id, pw} } = req;

    //res.send(LOGIN.check_login( getJSONfile('DB.json'), {id,pw} ));
    fs.readFile( path.join(__dirname, '/jsonFiles', 'DB.json'),'utf-8', function(err, data){
        if (err) throw err;
        res.send( LOGIN.check_login( JSON.parse(data).user,{id,pw}));
    });

   // res.send(LOGIN.check_login( getJSONfile('DB.json'), {id,pw} ));
 });
//app.get('/video', (req,res)=>{ res.sendFile( __dirname  + videoPlayer()) });

app.get('/json', (req,res)=>{ 
    const i = JSON.parse(getJSONfile('DB.json'));
    res.json(i.user[0].name);
    // fs.readFile(path.join(__dirname,'DB.json'),'utf-8', function(err,data){
    // if (err) throw err;
    // const i = JSON.parse(data);
    // res.json(i.user[0].name);
    // });
});
app.get('/json2', (req,res)=>{ fs.readFile("./DB.json", {encoding:"utf-8"},function(err,data){
    var users = JSON.parse(data);
    var user = users.user;
    res.send(user);
})})

app.listen(3000);

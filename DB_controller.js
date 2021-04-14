import { rejects } from 'assert';
import fs from 'fs';
import { userInfo } from 'os';
import path, { resolve } from 'path';

const __dirname = path.resolve();

export  function getJSONfile(fileName = String) {
    let json = {};
    fs.readFile( path.join(__dirname, '/jsonFiles', fileName),'utf-8', function(err, data){
        if (err) throw err;
        json =  JSON.parse(data);
    });

    
}

export function getJSONlist(fileName = String, key) {
    let json = undefined;
    fs.readFile( path.join(__dirname, '/jsonFiles', fileName),'utf-8', function(err, data){
        if (err) throw err;
        json = JSON.parse(data);
        console.log("1",json.user)
    }).then(()=>{return json});
    console.log("2",json)
    //return json;
}


// export function getJSONlist(fileName = String, key) {
//     let json={};
//     return new Promise( (resolve,reject)=>{
//         if(key){
//             resolve(
//                 fs.readFile( path.join(__dirname, '/jsonFiles', fileName),'utf-8', function(err, data){
//                     json=data;
//                 })
//             );
            
//         }else {
//             reject(console.log("ssss"));
//         }
//     })
// }
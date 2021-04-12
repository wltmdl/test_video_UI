/*
export.now = function () {
    return moment().format()
}
*/

//export const home= (req,res)=>{ res.sendFile(__dirname+'index.html'); };
export const home= ()=>{ return "/index.html"; };

export const login= (req,res)=>{ res.json({msg:"tset", id: req.body.id}); };
// export const login= (req,res)=>{
        

// };

export const videoPlayer= (req,res)=>{
    return "/videoplayer.html";
};
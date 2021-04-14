function check_login(obj_list, user){
    console.log('check_login',obj_list, user)
    
    const ii= obj_list.find( i=>{
        if (i.id === user.id) {
            
            return String(i.password) === user.pw
        }
    })
    if (ii) {
        return true;
    } else {
        return false;
    }
}
export {check_login };

// module.exports = {
//     check_login
// };
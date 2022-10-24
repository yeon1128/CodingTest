function solution(id_pw, db) {
    
    let result = "";
    
    db.map(data => {
        let check_id = id_pw[0] === data[0];
        let check_pw = id_pw[1] === data[1];
        
        if(check_id && check_pw) {
            return result = "login"
        } else if (check_id && !check_pw){
            return result = "wrong pw"
        } else if (!check_id && !check_pw) {
            return result = "fail"
        }
        
    })
    
    return result;
}
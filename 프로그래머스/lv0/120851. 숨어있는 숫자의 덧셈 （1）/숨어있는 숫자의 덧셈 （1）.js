function solution(my_string) {
    let answer = 0;
    my_string.split("").filter((v) => +v).map((v) => answer += parseInt(v));
    
    return answer;
}
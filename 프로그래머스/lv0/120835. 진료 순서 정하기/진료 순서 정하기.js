function solution(emergency) {
    const arr = [...emergency].sort((a,b) => b-a)
    return emergency.map((a) => arr.indexOf(a)+1)
}
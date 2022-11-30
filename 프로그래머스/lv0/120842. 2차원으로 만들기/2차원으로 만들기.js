function solution(num_list, n) {
    const result = []
    for(let i = 0 ; i < num_list.length; ) {
        const num = []
        for(let j = 0 ; j < n ; j++) {
            num.push(num_list[i])
            i++
        }
        result.push(num)
    }
    return result
}
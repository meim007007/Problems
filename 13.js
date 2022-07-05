function romanToInt(s) {
    const RI = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    const answer = {
        last: null,
        temp: 0,
        value: 0,
    }
    for (let index = 0; index < s.length; index++) {
        if (!answer.last) {
            answer.last = s[index]
            answer.temp += RI[s[index]]
            continue
        }

        if (answer.last == s[index]) {
            answer.temp += RI[s[index]]
            continue
        }
        if (RI[answer.last] > RI[s[index]]) {
            answer.value += answer.temp
            answer.last = s[index]
            answer.temp = RI[s[index]]
            continue
        }
        answer.value += RI[s[index]] - answer.temp
        answer.last = null
        answer.temp = 0
    }
    return answer.value + answer.temp
}

var romanToInt = function(s) {
    //create a map between roman and interger
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let sum = 0;
    //Subtract only if the Roman numeral in this position is less than the next digit.
    for (let index = 0; index < s.length - 1; index++) {
        map[s[index]] < map[s[index + 1]] ? sum += -map[s[index]] : sum += map[s[index]];
    }
    return sum += map[s[s.length - 1]];

};
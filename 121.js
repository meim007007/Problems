
const maxProfit = function(prices) {
    let answer = 0
    let diff=0
    for(let ind=0;ind<prices.length-1;ind++) {
        if(diff>0) {
           diff +=  prices[ind+1]-prices[ind]
        }
        else {
            diff = prices[ind+1]-prices[ind]
        }
        answer = Math.max(answer, diff)
    }
    return answer
}
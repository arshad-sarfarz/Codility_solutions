// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;
    //console.log("n=" + n + "   K=" + K);

    let remainder = K%n;
    //console.log("remainder=" + remainder);

    result = [];
    for(let index=0; index< n; index++){
        //console.log("A[index]=" + A[index]);
        let newIndex = (index + remainder) % n;
        //console.log("index=" + index + "   newIndex=" + newIndex);
        //console.log("A[" + newIndex + "]=" + A[index]);
        result[newIndex] = A[index];
    }

    return result;
}
// you can write to stdout for debugging purposes, e.g.

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    let n = A.length;

    let remainder = K%n;

    result = [];
    for(let index=0; index< n; index++){
        let newIndex = (index + remainder) % n;
        result[newIndex] = A[index];
    }

    return result;
}
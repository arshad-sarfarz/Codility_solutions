function solution(A) {
    A = A.sort();
    if (A.length==1){
        return A[0];   
    }
    for(let i=0; i<A.length-1;){
        var count = 1;
        var myNum = A[i];
        let j = i+1;
        while (A[j]==myNum){
            j++;
            count++;
        }
        i = j;
        if ((count%2)!=0){
            return myNum;           
        }
    }
    throw 0;
    // write your code in JavaScript (Node.js 8.9.4)
}

solution([2,2,3,3,4]);
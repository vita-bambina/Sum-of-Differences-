function sumofDifferences(arr){
    if (arr.length < 1)
        return 0;
    arr.sort((a,b) => b-a)
    let sum = 0;
    for (let i = 0; i< arr.length -1; i++){
        sum += arr[i]- arr [i+1];
    }
    return sum;

}

console.log (sumofDifferences([1,2,10]));
console.log (sumofDifferences([-3,-2,-1]));
console.log (sumofDifferences([1,1,1,1,1]));
console.log (sumofDifferences([]));
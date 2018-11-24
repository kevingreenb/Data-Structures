{
let arr = [2,6,9,2,1,8,5,6,3]
let num = 3
function maxSubarraySum(arr, num){
    if( arr.length < num)
        return false;
    let tempSum = 0;
    for (let i = 0; i < num; i++){
        tempSum = tempSum + arr[i];
    }
    let maxSum = tempSum;
    for (let i = 0; i < arr.length-num; i++){
        tempSum = tempSum - [arr[i]] + arr[i+num]
        maxSum = Math.max(tempSum, maxSum);
    }
    return maxSum;
}
maxSubarraySum(arr,num);
}
{
    let arr = [100,200,300,400];
    let num = 2;
    function maxSubarraySum(arr, num){
        if (num > arr.length)
            return null;
        let tempSum = 0;
        for (let i = 0; i < num; i++)
            tempSum = tempSum + arr[i];
        let maxSum = tempSum;
        for(let i = 0; i < arr.length-num; i++){
            tempSum = tempSum - arr[i] + arr[i+num]
            maxSum = Math.max(tempSum, maxSum);
        }
        return maxSum;
    }

    maxSubarraySum(arr, num);
}
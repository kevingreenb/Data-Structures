{
    let arr = [3,1,7,11,2,9,8,21,62,33,19]
    let num = 52
    function minSubArrayLen(arr, num){
        let j = 0;
        let i = 0;
        let minLen = arr.length;
        let tempLen = 0;
        let tempSum = 0;
        while(j < arr.length-1){
            if (arr[i] >= num)
                return 1;
            if (i < arr.length){
                tempSum = tempSum + arr[i];
                if (tempSum >= num){
                    tempLen = i - j + 1;
                    minLen = Math.min(minLen, tempLen);
                    j++;
                    i = j;
                }
                i++;  
            }                
        }
        return minLen;
    }
    minSubArrayLen(arr, num);//2
}

// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;
 
//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then 
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window 
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     } 
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//     else {
//       break;
//     }
//   }
 
//   return minLen === Infinity ? 0 : minLen;
//  }
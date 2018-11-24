{
let arr = [];
let target = 8

function averagePair(arr, target) {
    let left = 0;
    let right = arr.length-1;
    let temp = 0;
    while (left < right){
        temp = (arr[left] + arr[right])/2; 
        if ( temp === target)
            return true;
        if (temp > target)
            right--;
        else (temp < target)
            left++;         
    }
    return false;
}
averagePair(arr, target);
}
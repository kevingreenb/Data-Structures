function productOfArray(arr){
    if (arr.length === 1){
        return arr[0];
    }
    return arr.pop() * productOfArray(arr);
}

productOfArray([1,2,3,10]);
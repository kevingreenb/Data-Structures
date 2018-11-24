{let arr1 = [1,2,3];
let arr2 = [4,1,9];

function same(arr1, arr2) {
    if (arr1.length !== arr2.length)
        return false;
    let frequency1 = {};
    let frequency2 = {};
    for (let val of arr1)
        frequency1[val] = (frequency1[val] || 0) + 1;
    for (let val of arr2)
        frequency2[val] = (frequency2[val] || 0) + 1;
    for (let val in frequency1){
        if (!(frequency2[val*val]))
            return false
        if (frequency1[val] !== frequency2[val*val])
            return false
    }
    return true;
}

same(arr1,arr2);

}
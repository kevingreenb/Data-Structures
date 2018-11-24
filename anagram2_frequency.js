{
let str1 = "abc";
let str2 = "acb";

function same(str1, str2){
    if (str1.length !== str2.length)
        return false;
    let frequency1 = {};
    for (let i = 0; i < str1.length; i++)
        frequency1[str1[i]] = frequency1[str1[i]] ? frequency1[str1[i]]+1 : 1;
    for (let i = 0; i<str2.length; i++){
        if(!frequency1[str2[i]])
            return false;
        else
            frequency1[str2[i]] -= 1;
    }
    return true;

}

same(str1, str2);

}
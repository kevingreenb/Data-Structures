{
let str1 = 'abc';
let str2 = 'acb';

function anagram(str1, str2){
    if(str1.length !== str2.length)
        return false;
    let d1 = {};
    let d2 = {};
    for (let i = 0; i < str1.length; i++)
        d1[str1[i]] = d1[str1[i]] ? d1[str1[i]]+1 : 1;
    for (let i = 0; i < str2.length; i++)
        d2[str2[i]] = d2[str2[i]] ? d2[str2[i]]+1 : 1;
    for (let val in d1) {
        if (!(val in d2))
            return false;
        if (d1[val] !== d2[val])
            return false
    }
    return true
        
}
anagram(str1, str2)

}
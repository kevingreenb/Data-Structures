{
    let str1 = "hello";
    let str2 = "hello world"
    function isSubsequence(str1, str2) {
        let j = 0;
        for(let i = 0; i < str2.length; i++){
           if (str1[j] === str2[i]){
            if( j === str1.length-1)
                return true
            j++;         
           }
        }
     return false;
    }
    isSubsequence(str1, str2);
}
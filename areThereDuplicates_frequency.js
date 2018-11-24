{
function areThereDuplicates(){
    let args = {};
    for (let val of arguments){
        if(args[val])
            return true
        else 
            args[val] = val;
    }
    return false;
}

areThereDuplicates(0,1,2)
}

//     function areThereDuplicates() {
//       return new Set(arguments).size !== arguments.length;
//     }


//3
//123

//3
//122

//4
//abca
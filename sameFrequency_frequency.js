{
let num1 = 1823;
let num2 = 281;
function sameFrequency(num1, num2){
    let n1 = num1.toString();
    let n2 = num2.toString();
    if (n1.length !== n2.length)
        return false;
    let frequency1 = {};
    for (let val of n1)
        frequency1[val] = frequency1[val] ? frequency1[val]+1 : 1;
    for (let val of n2){
           if (!frequency1[val])
            return false;
           frequency1[val] -= 1;          
    }
    return true;      
}

sameFrequency(num1,num2);

}
{
    let values = [1,1,1,1,1,1,1,2,2,3,3,4]; //2 
    function countUniqueValues(values) {
        if (values.length ===0)
            return 0;
        let first = 0;
        let second = 1;
        while (second <= values.length){
            if (values[first] !== values[second]){
                first++;
                values[first] = values[second];
                second++;
            }
            else{
                second++
            }      
        }
        return first++;
    }

    countUniqueValues(values);
}
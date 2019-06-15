
//"a".charCodeAt(0) 97 - 96 = a
function hash(key, arrayLen) {
    let total = 0;
    for (let char of key){
        // map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}

function hash2(key, arrayLen) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total;
}

class HashTable {
    constructor(size=53){
        this.keyMap = new Array(size);
    }
    _hash(key, arrayLen) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % arrayLen;
        }
        return total;
    }
    set(key, value){
       let index = this._hash(key);
       if (!this.keyMap[index]){
           this.keyMap[index] = [];
       }
       this.keyMap[index].push([key, value]);
       return index;
    }

    get(key){
        let index = this._hash(key);
        if (this.keyMap[index]){
            for(let i = 0; i<this.keyMap[index].length; i++){
                if (this.keyMap[index][i][0] === key){
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined;
    }
    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (this.keysArr.includes(this.keyMap[i][j][0])) {
                        this.keysArr.arr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
    values(){
        let valuesArr = [];
        for (let i =0; i < this.keyMap.length; i++){
            if(this.keyMap[i]){
                for (let j = 0; j< this.keyMap[i].length; j++){
                    if(this.valuesArr.includes(this.keyMap[i][j][1])){
                        this.values.arr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }
}

//Implement an alogrithm to determine if a string has all unique characters. 
//What if you cannot use additional data structures


function isUnique(strArr) {
    
    let len = strArr.length;
    for (i = 0; i < len-1; i++){
        for (j = i + 1; j < len; j++){
            if (strArr[j] === strArr[i]) {
                return false;
            }
        }
    }
    return true;
}

let str = 'Vipul Malhotra';
let bl = isUnique(str);
console.log(bl);
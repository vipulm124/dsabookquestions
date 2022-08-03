//Given 2 string, write a method to decide if one is a permutation of another

function checkSort(strArr, strArr2) {
    
    let ss = sortedString(strArr);
    let ss2 = sortedString(strArr2);

    if (ss === ss2) {
        return true;
    }
    return false;
}

function sortedString(strArr) {
    return strArr.split('').sort().join('');

}

let bl = checkSort('gods', 'dog');
console.log(bl);
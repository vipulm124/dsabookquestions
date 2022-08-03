//there are 3 types of edits that can be performed on strings:insert a char, remove a chat, replace a char, Given 2 strings, write a func to check if they are one edit(or 0 edits) away

//insert a char - length difference is +1, and all the items except one is same
//remove a char - length difference is -1, and all the items except one is same
//replace a char - length should be same, value should diff for only one items


function checkIfReplaced(str1, str2) {
    let isReplacementFound = false;
    if (str1.length === str2.length) {
        for (i = 0; i < str1.length; i++){
            if (str1[i] !== str2[i]) {   
            if (!isReplacementFound) {
                isReplacementFound = true;
                }
            else {
                return false;
            }    
            }
        }
    }
    
    return isReplacementFound;
}


//this method will be called such that str1.length >  str2.length
function checkIfInsertOrRemove(str1, str2) {
    let index1 = 0;
    let index2 = 0;
    while (index1 < str1.length && index2 < str2.length) {
        if (str1[index1] !== str2[index2]) {
            if (index1 !== index2) {
                return false;
            }
            index1++;
        }
        else {
            index1++;
            index2++;
        }
    }
    return true;
   
    
}

function checkStrings(str1, str2) {
    var res = false;
    if (str1.length === str2.length) {
         res = checkIfReplaced(str1, str2);
    }
    else if (str1.length + 1 === str2.length) {
        res = checkIfInsertOrRemove(str2, str1); 
    }
   else if (str2.length + 1 === str1.length) {
        res = checkIfInsertOrRemove(str1, str2); 
    } 

    console.log(res);
}


let str1 = "pale";
let str2 = "pals";
checkStrings(str1, str2);





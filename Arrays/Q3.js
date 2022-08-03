//Write a method to replace all spaces in a string with %20. You may assume that the string has sufficent space at the end to hold the additional chars, and that you asre given the tru length of the string.


function replaceSpace(strArr, len) {

    var arr = strArr.split('');
    
    //count number of spaces
    let count = 0;

    for (i = 0; i < len; i++){
        if (strArr[i] === ' ') {
            count++;
        }
    }

    let finalLen = len + (count * 2);
    let index = finalLen - 1;
    for (i = len - 1; i >= 0; i--){
        if (strArr[i] !== ' ') {
            arr[index] = strArr[i];
            index--;
        }
        else {
            arr[index] = "0";
            arr[index-1] = '2';
            arr[index - 2] = '%';
            index = index - 3;
        }
    }

    display(arr);

}

function display(strArr) {
    let len = strArr.length;

    for (i = 0; i < len; i++){
        console.log(strArr[i]);

    }
}

replaceSpace('This is Sparta',14);



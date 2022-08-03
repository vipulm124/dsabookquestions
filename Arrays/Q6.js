//Rotate Matrix - Given an image represented by NxN Matrix, where each pixel in the image is a 4 byte, write a method to rotate the image by 90 degrees. Can you do it in place?



function display(arr) {
    for (i = 0; i < arr.length; i++){
        let f = ''
        for (j = 0; j < arr[i].length; j++){
            f += arr[i][j] + "  ";
            // console.log(arr[i][j])
            
        }
        console.log(f);
    }

}

function rotateArray(arr) {
    
    let N = arr.length;
    //transpose the Matrix
    for (i = 0; i < N; i++){
        for (j = 0; j < i; j++){
            let temp = arr[i][j];
            arr[i][j] = arr[j][i];
            arr[j][i] = temp;
        }
    }

    //swap columns
    for (i = 0; i < N; i++){
        for (j = 0; j < N / 2; j++){
            let temp = arr[i][j];
            arr[i][j] = arr[i][N - j - 1];
            arr[i][N - j - 1] = temp;
        }
    }
}


let arr = [[1, 2, 3,4], [5, 6,7, 8], [9,10, 11, 12],[13,14,15,16]]
display(arr);
rotateArray(arr);
display(arr);
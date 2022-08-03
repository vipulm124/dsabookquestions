//Zero Matrix - Write an algo such that if an element in an MxM matric is 0, the entire row and colunm are set to 0
// 1 0 3
// 4 5 6
// 7 8 9

function display(arr) {
    for (i = 0; i < arr.length; i++){
        let f = ''
        for (j = 0; j < arr[i].length; j++){
            f += arr[i][j] + " ";
            // console.log(arr[i][j])
            
        }
        console.log(f);
    }

}

function Zero(arr) {
    let rows = [];
    let cols = [];
    for (i = 0; i < arr.length; i++){
        for (j = 0; j < arr[i].length; j++){
            // console.log(arr[i][j])
            if (arr[i][j] === 0) {
                rows.push(i);
                cols.push(j);
            }
        }
    }

    for (i = 0; i < rows.length; i++){
        console.log(rows[i]);
    }
for (i = 0; i < cols.length; i++){
        console.log(cols[i]);
    }
    // console.log(arr.length);
    // console.log(arr[0].length);
    // console.log(arr[2][2]);

nullAllRows(arr, rows);
nullAllCols(arr, cols);
// display(arr);
}

function nullAllRows(arr, rows) {
    for (i = 0; i < rows.length; i++){
        for (j = 0; j < arr[0].length; j++){
            arr[rows[i]][j] = 0;
        }
    }
}

function nullAllCols(arr, cols) {
    for (i = 0; i < cols.length; i++){
        for (j = 0; j < arr.length; j++){
            arr[j][cols[i]] = 0;
        }
    }
}

let arr = [[1, 0, 3,4], [4, 5,0, 6], [1,7, 8, 9]]
display(arr);
Zero(arr);
display(arr);

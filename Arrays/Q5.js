//String Compression - Implement a method to perform basic string Compression using the counts of repeated chars, Eg - the string aabcccccaaa would become a2b1c5a3. IF string cannot be compressed, return original string. Assume string contains only uppercase and lowercase letter


function compress(str) {
    let finalStr = '';

        // finalStr += str[0];
        let count = 0;
        for (i = 0; i < str.length; i++){
            count++;
        if (i+1 >= str.length || str[i] !== str[i + 1]) {
            finalStr += "" + str[i] + count;
            count = 0;
        }
        }

    return finalStr;

}

let str = "aabbbcccsd";
let final = compress(str);
console.log(final);



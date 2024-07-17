// Task 18

function countCase(str) {
    let arr1 = str.split(" ").join("")
    let arr2 = str.split(" ").join("").toLowerCase()
    let uppercase = 0
    let lowercase = 0
    for (const i in arr1) {
        if (arr1[i] === arr2[i]) {
            uppercase++
        }
        else {
            lowercase++

        }
    }
    return { uppercase, lowercase }
}
// console.log(countCase("Hello World")); 

// Task 19

function evenOddIndexSums(arr) {
    let evens = []
    let odds = []
    let sumOfEvens = 0
    let sumOfOdds = 0
    for (const i in arr) {
        if (i % 2 !== 0) {
            evens.push(arr[i])
            sumOfEvens = evens.reduce((a, b) => a + b, 0)
        }
        else {
            odds.push(arr[i])
            sumOfOdds = odds.reduce((a, b) => a + b, 0)
        }
    }
    return { sumOfEvens, sumOfOdds }
}
// console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6]));

// Task 20 

function rotateMatrix(matrix) {
    let result = []
    for (let i = 0; i < matrix.length; i++) {
        let arr = []
        for (let g = 0; g < matrix.length; g++) {
            arr.push(matrix[g][i])

        }
        result.push(arr.reverse())
    }

    return result
}
// console.log(rotateMatrix([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]));

// Task 21

function removeSpaces(str) {
    let new_arr = str.split(" ").filter(item => item !== "").join("")
    return new_arr
}
// console.log(removeSpaces("Hello World! How are you?"));

// Task 22

function areAnagrams(str1 = "", str2 = "") {
    let arr1 = str1.split("").sort().join("")
    let arr2 = str2.split("").sort().join("")
    if (arr1 === arr2) {
        return true
    }
    else {
        return false
    }
}

// console.log(areAnagrams("listen", "silent"));
// console.log(areAnagrams("hello", "world")); 



// Task 23

function mostFrequentElement(arr) {
    let max_count = 0
    let number = 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let g = 0; g < i; g++) {
            if (arr[i] == arr[g]) {
                count++

            }
            if (count > max_count) {
                max_count = count
                number = arr[i]
            }
        }

    }

    return { number }
}

// console.log(mostFrequentElement([1, 3, 1, 2, 1, 4, 1, 3, 1, 5, 1]));

// Task 24

let count = 0
function sumOfDigits(str) {
    str.split("").forEach((item) => {
        if (item >= 0 || item <= 9) {
            count += (+item)
        }
    })
    return count
}
console.log(sumOfDigits("abc123def45"));; // 15 (1+2+3+4+5)



// Task 25 

function letterFrequency(str) {
    let obj = {}
    let new_str = str.split(" ").join("")
    for (const i in new_str) {
        obj[new_str[i]] = (obj[new_str[i]] || 0) + 1;
    }
    return obj
}

// console.log(letterFrequency("hello world"));
// {h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1}



//   Task 1


// let new_arr = []
// for (const item of arr) {
//    if (typeof(item) == "object") {
//    new_arr.push(...item)
//    }
// }

// function flattenArray(arr) {
//     return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
// }

// let arr = [[1, 2, 3, ["a", "b", "c"]], [5, 9, 8]];
// let flattenedArr = flattenArray(arr);
// console.log(flattenedArr); // Output: [1, 2, 3, "a", "b", "c", 5, 9, 8]



// function sumNum(num) {
//     if (num < 1) {
//         num --
//         sumNum(num)
//     }
// console.log(num);
// }
// console.log(sumNum(1));

let arr = [[1, 2, 3, ["a", "b", "c"]], [5, 9, 8]]
// function sumArray(arr) {
    
// }
// sumArray(arr)
// console.log(arr.flat(Infinity));
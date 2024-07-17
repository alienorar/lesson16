// Task 26

function commonElements(arr1, arr2) {
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        for (let g = 0; g < arr1.length; g++) {
            if (arr1[g] === arr2[i]) {
                result.push(arr1[g])
            }

        }
    }
return result 
}

// console.log(commonElements([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]

// Task 27

function commonCharacters(str1, str2) {
    let newArr = [];
    for (let i = 0; i < str1.length; i++) {
        if (str2.includes(str1[i]) && !newArr.includes(str1[i])) {
            newArr.push(str1[i]);
        }
    }
    return (newArr.join(''))
}

// console.log(commonCharacters("hello", "world")); // "lo"


// Task 28

function symmetricDifference(massArr1, massArr2) {
    let massNewArr = [];

    for (let i = 0; i < massArr1.length; i++) {
        if (!massArr2.includes(massArr1[i])) {
            massNewArr.push(massArr1[i]);
        }
    }

    for (let i = 0; i < massArr2.length; i++) {
        if (!massArr1.includes(massArr2[i])) {
            massNewArr.push(massArr2[i]);
        }
    }

    return massNewArr;
}

// console.log(symmetricDifference([1, 2, 3], [3, 4, 5])); // [1, 2, 4, 5]

// TAsk 29



// Task 30

function uniqueCharacters(str) {
    let result ="";
    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i]
        }
    }
    return result;
}

console.log(uniqueCharacters("hello world")); // "helo wrd"

// Task 31

function findPairs(arr, target) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result
}

console.log(findPairs([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]

// Task 32

function squareNumbers(arr) {
    let degnum = []
    arr.forEach(item => {
        degnum.push(item * item)
    });
  return degnum
}

// console.log(squareNumbers([1, 2, 3, 4, 5])); 


// Task 33

function countPalindromNumbers(start,end) {
    let countStr = []
    for (let i = start; i <= end; i++) {
        let reverseNum = +(i.toString().split('').reverse().join(''));
        if (i === reverseNum) {
            countStr.push(i)
        }
    }
    return countStr
}

console.log(countPalindromNumbers(1, 100));

// TAsk 34



function withCommas(new_arr2) {
    let result = new_arr2.join(", ")
   return result
}

console.log(withCommas([1, 2, 3, 4, 5]));
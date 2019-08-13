import { SSL_OP_EPHEMERAL_RSA } from "constants";

/*Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!*/

// var firstArray = [2, 2, 4, 1];
// var secondArray = [1, 2, 0, 2];

// intersection(firstArray, secondArray); // [2, 1]

function intersection(array1, array2){
 let lookup = {};
 let result = [];
 
 for (let i = 0; i< array1.length; i++){
     let number = array1[i];
     if (!!lookup[number]){
         lookup[number]= 1;
     }
 }

for (let j=0; j< array2.length; j++){
    let number = array2[j];
    if(lookup[number]){
            result.push(number);
            lookup[number]=0;
    }
}
return result;
}

// Given two strings, return true if they are anagrams of one another "Mary" is an anagram of "Army

// var firstWord = "Mary";
// var secondWord = "Army";

// isAnagram(firstWord, secondWord); // true

function isAnagram (str1, str2){

   if(str1.length()!== str2.length()) return false;

   let array1 = str1.toLowercase().split("");
    let array2 = str2.toLowercase().split("");
  

   let lookup = {};

   for (let i=0; i<array1.length; i++){
       let letter = array1[i];

       if(lookup[letter]){
           lookup[letter]++;
       }else {
           lookup[letter] = 1;
       }
   }
   for (let j = 0; i<array2.length; j++){
       let letter = array2[j];
       if(lookup[letter]){
           lookup[letter]--;
       }
   }

}

// For two strings to be isomorphic, all occurrences of a character in string A can be replaced with another character
// to get string B.The order of the characters must be preserved.There must be one - to - one mapping for ever char of

// string A to every char of string B.

// `paper` and`title` would return true.
// `egg` and`sad` would return false.
// `dgg` and`add` would return true.

// isIsomorphic("egg", 'add'); // true
// isIsomorphic("paper", 'title'); // true
// isIsomorphic("kick", 'side'); // false
function isIsomorphic(str1, str2) {
    if (str1 === str2) return true;
    if (str1.length !== str2.length) return false;

    let array1 = str1.split("")
    let array2 = str2.split("")
    let lookup1 = {};
    let lookup2 = {};
    // {p: [0,2], a: [1], e:[3], r[4]}
    for (let i = 0; i < array1.length; i++) {
        let letter = array1[i];
        if (lookup1[letter]) {
            lookup1[letter][1]++;//maybe here. i think so. 
        } else {
            lookup1[letter] = [i, 1];//added default count here
        }
    }
    for (let i = 0; i < array2.length; i++) {
        let letter = array2[i];
        if (lookup2[letter]) {
            lookup2[letter][1]++;
        } else {
            lookup2[letter] = [i, 1];
        }
    }
    console.log(lookup1)
    console.log(lookup2)
    if (lookup1 === lookup2) {
        return true;
    } else {
        return false;
    }

}

// “Write a function that given an integer x, returns an array containing the multiplication table for that integer”

//for example, myFunction(3) would return [ 1, 2, 3, 2, 4, 6, 3, 6, 9 ]

function myFunction(num){
    let array = []
    if(num === 1 || num === 0){
        return [num];
    }
    
    if(num < 0){
        num = num* -1;
    }
        for(let i = 1; i< num+1; i++){
            array.push(i)
        }
        for (let i = 0; i<= num; i++){
            array.push (array[i]*array[i])
        }
    
    return array;
}


function aTypicalDay(hasOnSiteInterview, hasCodingChallenge) {
    //Morning
    drinkCoffee();
    let applicationSubmitted = 0;
    while(applicationSubmitted < 5){
        applicationSubmitted ++;
    }

    //Afternoon
    hasLunch();
    let topics = ["dataStructures", "systemDesign","javascript"];
    for(let i = 0; i<topics.length; i++){
        study(topics[i]);
    }

    //Evening
    hasDinner();
    if(hasCodingChallenge){
        doCodingChallenge();
    }else{
        studyMore();
    }
    workOut();
    return sleep();
}

//is data sorted? linear: binary

function linearSearch(arr, value){
 for (let i = 0; i<arr.length; i++){
     if(arr[i]===value){
         return i;
     }
    
 }
    return -1;
}

function binarySearch (sortedArr, num){
//[2,5,6,8,9]
// s   m   e
    let start = 0;
    let end = sortedArr.length -1;
    let middle = Math.floor((start + end )/2)

   while(sortedArr[middle] !== num && start <= end) {
       if(num<sortedArr[middle]){
           end = middle - 1;
       }else {
           start = middle + 1;
       }
       middle = Math.floor((start + end) / 2)
   }
   return arr[middle] === num? middle: -1;
}

function stringSearch(str1, str2){
    if(str1===str2) return str1;
    let arr1 = str1.split("");
    let arr2 = str.split("");
    for(let i = 0; i< arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr[i]===arr[j]){
                i++;
                j++;
            }
        }
    }
}

stringSearch("lorie loled","lol")


function bubbleSort (arr){
    for(let i = arr.length; i>0; i-- ){
        for(let j=0; j< i-1; j++){
            if(arr[i]> arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

 bubbleSort([2,6,55,78,1,9])


// You are given an API that returns a JSON with a list of prices over a period
// of time: APi.getPrices() -> { prices: [3, 4, 5, 4, 3, 7, 6, 8, 3, 7] };
// We need to build a UI that displays the highest price on all 3 day windows
// for all of the prices.

// For the sample input: [3, 4, 5, 4, 3, 7, 6, 8, 3, 7]
            //            i  
// The UI needs to display: [5, 5, 5, 7, 7, 8, 8, 8]

function getPrices (arr){
    result = [];

    for(let i = 0; i<arr.length; i++){
        for(let j = i; j< i+3; j++){
            let temp = 0
            if(arr[j] > arr[j+1]){
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }    
        result.push(arr[i+2])    
    }
    
    return result;
}

function insertionSort (arr){
    for(let i = 1; i<arr.length; i++){
        let currentVal = arr[i];
        for (let j= i-1;j>=0 && arr[j] > currentVal;j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentVal;
    }
    return arr;
}

insertionSort([2,1,9,76,4])
//               j i

// currentVal = 1

//https://codeburst.io/js-data-structures-linked-list-3ed4d63e6571

//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

//QUICK SORT 

function pivot(arr, start=0, end= arr.length+1){
    let pivot = arr[start];
    let swapIdx = start;
    
    function swap(arr, i, j) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    for (let i = start+1; i<arr.length; i++){
        if(pivot>arr[i]){
            swapIdx ++;
            swap(arr, swapIdx, i)
            // console.log(arr)
        }
    }
    swap(arr, start, swapIdx)
    return swapIdx;
}

//pivot([4,8,2,1,5,7,6,3])
//3

function quickSort (arr, letf = 0, right=arr.length -1){
    
    if(left<right){
    let pivotindex = pivot (arr, left, right) //3
    //left
    quickSort(arr, left, pivotindex -1 );
    //right
    quickSort (arr, pivotindex + 1, right);
    //whats base case?
    }
    return arr;
}

function getDigit (num,i){
    return Math.floor(Math.abs(num) / Math.pow(10, i) %10)
}

// input = "abc!d"
// output = "dcb!a"

// string ="abcd"
// string.charCodeAt(3) = a number that corresponds to the character at that 
//  a - z 97-122
// A-Z 

// 2 pointers (start and end)
// start = 0
// end = length - 1

// if start < end, keep looping 

function swapLettersOnly (S){
    let arr = S.split("")
    let start = 0;
    let end = arr.length -1;

    while(start<end){
        if(arr[start].charCodeAt(97) && arr[end].charCodeAt()){
            // check if start is a letter, check if end is a letter
            // if both are, swap them
            // increment start, decrement end
            start++;
            end--;
        }
        if(arr[start].charCodeAt()&&){
        // check if start is a letter, check if end is a letter
        // start is a letter, end is not a letter 
        // decrement the end
        

        }
        // start is not a letter, end is a letter
        // increment the start 
    }
}


// Want to use an object where the key is the number and the value is numCount
// nums1 = [1, 2, 2, 1 nums1Object = {1:2, 2:2}

// going to use a solution array 

// first step is to iterate over nums1 and create an object where the key is the number and the value is the count 

// iterate over nums2
// check if the first element is in nums1Object
// 2 is in nums1Object and the value is !== 0 ==> push element into solution array, AND decrement the value in nums1Object by 1 



function closestNumbers(numbers) {
    // find minium difference 
    numbers.sort(function (a, b) { return a - b }) //sort array in aceding order
    let j = 0;
    let minVal = numbers[j + 1] - numbers[j];
    // let minVal;
    // store all pairs in a hash obj
    let lookup = {}
    for (let i = 1; i < numbers.length; i++) {
        let diff = Math.abs(numbers[i] - numbers[j]);
        //store key as diff, value as an array of elements
        if (lookup[diff] === undefined) {
            lookup[diff] = [[numbers[j], numbers[i]]];
        } else {
            lookup[diff].push([numbers[j], numbers[i]]);
        }
        if (minVal > diff) {
            minVal = diff;
        }
        j++;
    }
    // console.log(lookup)
    // console.log(lookup[minVal])
    //print out the pairs in lookup obj that key is minVal 
    let resultArr = lookup[minVal]
    for (let i = 0; i < resultArr.length; i++) {
        console.log(resultArr[i][0], resultArr[i][1]);
    }
}




function meanderingArray(unsorted) {
    // sort the array from small to large
    let sorted = unsorted.sort(function (a, b) { return a - b });
    //.sort is a midified merge sort built-in function in javascript that could  be simplied this step to sort array

    //set variables to use two pointers method use while loop to progress comparison
    let s = 0;
    let e = sorted.length - 1
    let result = []

    while (s <= e) {
        if (s === e) {
            result.push(sorted[s]); //use .push with runtime O(1) instead of shift or .unshift
        } else {
            result.push(sorted[e]);
            result.push(sorted[s]);
        }
        s++;
        e--;
    }

    return result;

}

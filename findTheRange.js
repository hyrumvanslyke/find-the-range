// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]

// Write your solution below:
let big = array[0] // set a variable for big and one for small to the first array index
let small = array[0]
for(let i = 1; i < array.length; i++){// for loop that loops through the given array
   
    if(array[i] < small ){ // checks if the current index is less than our small index and if so sets small to that index
        small = array[i]
    }
    if(array[i] > big){ // checks if the current index is greater than our big index and if so sets big to that index
        big = array[i]
    }
}
console.log("Smallest number: ", small)// logged for testing and clean up
console.log("Biggest number: ", big)
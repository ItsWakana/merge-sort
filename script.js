const mergeSort = (array) => {
    //when we reach length of 1 we want to return the array we've be recursively returning
    if (array.length === 1) {
        return array;
    }
    //split our array into 2 even parts and round the number up in case its not even
    const half = Math.round(array.length / 2);

    //define our left and right variables
    let left = [];
    let right = [];

    //for each value in the first half of the array push into the left side
    for (let i=0; i<half; i++) {
        left.push(array[i]);
    }
    //for each value in the other half of the array push into the right side

    for (let i=half; i<array.length; i++) {
        right.push(array[i]);
    }
    //function which takes in that left and right side, merges them into a single array and sorts the values, and then returns this array to the caller
    const merge = (left, right) => {

        const merged = [...left, ...right];
        const sorted = merged.sort((a, b) => a - b);
    
        return sorted;
    }
    //finally we recursively call our mergeSort as arguments to our merge function and keep returning these arrays until we reach our base case
    return merge(mergeSort(left), mergeSort(right));

}

console.log(mergeSort([567,2,8,1,98,67,500]));

//function takes in an array of numbers, divide the array by 2 so its a half. Which will give us two new arrays. Keep dividing the array by recursively calling the original function, until we have an array with a length of 1.

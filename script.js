const merge = (left, right) => {

    const merged = [...left, ...right];
    const sorted = merged.sort((a, b) => a - b);

    return sorted;
}

const mergeSort = (array) => {

    if (array.length === 1) {
        return array;
    }

    const half = Math.round(array.length / 2);

    let left = [];
    let right = [];

    for (let i=0; i<half; i++) {
        left.push(array[i]);
    }

    for (let i=half; i<array.length; i++) {
        right.push(array[i]);
    }

    return merge(mergeSort(left), mergeSort(right));

}

// console.log(mergeSort([1,6,3,4,5,2,7,8]));
console.log(mergeSort([567,2,8,1,98,67,500]));

//function takes in an array of numbers, divide the array by 2 so its a half. Which will give us two new arrays. Keep dividing the array by recursively calling the original function, until we have an array with a length of 1.

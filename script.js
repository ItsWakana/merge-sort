const merge = (left, right) => {

    const merged = [...left, ...right];
    const sorted = merged.sort((a, b) => a - b);

    return sorted;
}

const mergeSort = (array) => {
    console.log(array);

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

    // return merge(mergeSort(left), mergeSort(right));
    // mergeSort(left);
    // mergeSort(right);

    const l = mergeSort(left);
    const r = mergeSort(right);

    return merge(l, r);

}

// const mergeSort = (array) => {
//     if (array.length < 2) {
//         return array;
//     }

//     const mid = Math.ceil(array.length / 2);

//     const firstHalf = array.splice(0, mid);
//     const secondHalf = array.splice(-mid);

//     mergeSort(firstHalf);    
//     mergeSort(secondHalf);    
//     return merge(mergeSort(firstHalf), mergeSort(secondHalf));
// }

console.log(mergeSort([567,2,8,1,98,67,500]));


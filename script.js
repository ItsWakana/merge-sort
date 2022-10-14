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

    const merge = (l, r) => {
        let lIndex = 0;
        let rIndex = 0;
        let sortedArray = [];

        while (lIndex < l.length && rIndex < r.length) {
            if (l[lIndex] <= r[rIndex]) {
                sortedArray.push(l[lIndex++]);
            } else {
                sortedArray.push(r[rIndex++]);
            }
        }

        for (; lIndex<l.length; lIndex++) {
            sortedArray.push(l[lIndex]);
        }

        for (; rIndex<r.length; rIndex++) {
            sortedArray.push(r[rIndex]);
        }

        return sortedArray;

    }

    const l = mergeSort(left);
    const r = mergeSort(right);

    return merge(l, r);

}

console.log(mergeSort([567,2,8,1,98,67,500]));


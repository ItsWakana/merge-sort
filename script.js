let array = [5,2,9,7];

const splitArray = (array) => {
    const half = Math.round(array.length / 2);

    let split1 = [];
    let split2 = [];

    for (let i=0; i<half; i++) {
        split1.push(array[i]);
    }

    for (let i=half; i<array.length; i++) {
        split2.push(array[i]);
    }
    console.log(split1);
    console.log(split2);



}

splitArray(array);
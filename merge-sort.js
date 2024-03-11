function mergeSort(array) {
    if (array.length <= 1) return array;
  
    const midpoint = Math.floor(array.length / 2);
    const leftArray = mergeSort(array.slice(0, midpoint));
    const rightArray = mergeSort(array.slice(midpoint, array.length));
  
    return merge(leftArray, rightArray);
};

function merge(leftArray, rightArray) {
    const finalArray = [];

    let i = 0;
    let j = 0;

    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] < rightArray[j]) {
            finalArray.push(leftArray[i]);
            i++;
        }
        else {
            finalArray.push(rightArray[j]);
            j++;
        }
    }

    while (i < leftArray.length) {
        finalArray.push(leftArray[i]);
        i++;
    }

    while (j < rightArray.length) {
        finalArray.push(rightArray[j]);
        j++;
    }

    return finalArray;
};

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([79, 100, 105, 110]));

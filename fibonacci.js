// iterative approach
function fibs(n) {
    let array = [0, 1];
  
    if (n <= 0) return "Please enter a valid number";

    if (n == 1) return array = [0];
    else if (n == 2) return array = [0, 1];
    else {
        for (let i = 2; i < n; i++) {
            array.push(array[i - 2] + array[i - 1]);
        }
        return array;
    }
};


// recursive approach
function fibsRec(length) {
    if (length <= 0) return "Please enter a valid number";

    if (length == 1) return [0];
    else if (length == 2) return [0, 1];
    else {
        return [...fibsRec(length - 1),  fibsRec(length - 1)[length - 2] + fibsRec(length - 1)[length - 3]];
    }
};
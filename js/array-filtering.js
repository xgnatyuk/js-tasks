const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
    return num % 2 == 0;

}
const filterArray = (arrayToFilter, filerFn) => {
    const filteredArray = [];
    arrayToFilter.forEach(num => {
        if (filerFn(num)) {
            filteredArray.push(num);
        }
    })
    return filteredArray;

}

console.log(filterArray(mixedArray, isEven));
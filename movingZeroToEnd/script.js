ar moveZeros = function (arr) {
    let filteredZeros = arr.filter((elm) => elm === 0);
    let allOther = arr.filter((elm) => elm !== 0);
    return allOther.concat(filteredZeros)
    }
    
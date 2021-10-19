function arrayDiff(a, b) {
    let newArr = a.filter((ele) => !b.includes(ele))
    return newArr
    }
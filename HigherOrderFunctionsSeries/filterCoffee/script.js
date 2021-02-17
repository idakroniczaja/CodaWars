function search(budget, prices) {
    let filterCoffe = prices
    .filter(elem => (elem <= budget)) 
    .sort((a,b)=> a-b)
    return filterCoffe.join(",")
    }
    

    prices1 = [6, 1, 2, 9, 2]


    function search(budget, prices) {
     let filterCoffe = prices
    .filter(elem => (elem <= budget)) 
    .sort((a,b)=> a-b)
    .join(",")
    return filterCoffe
    }
    
    search(9, prices1)    
//my solition
function cakes(recipe, available) {

    let ing;
    let all = []
    
    for(let key in recipe){
      if(key in available){
       ing = Math.floor(available[key]/recipe[key]);
       all.push(ing)
    }else return 0
      }
      all.sort((a,b)=>a-b)
     let howMany =Number(all.filter((each,i)=>i===0)) 
     return howMany
    }
    
    cakes({flour: 300, sugar: 150, milk: 100}, {sugar: 500, flour: 2000, milk: 2000, oil: 100, apples: 3 })


    /////else
    function cakes(recipe, available) {
        return Object.keys(recipe).reduce(function(val, ingredient) {
          return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
        }, Infinity)  
      }

      const cakes = (needs, has) => Math.min(
        ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
      )




function sumMix(array){
return array.map(elem=>Number(elem)).reduce((acc, curr)=>acc+curr,0)
}

//no map neccesary
function sumMix(array){
    return array.reduce((acc, curr)=>acc+Number(curr),0)
    }
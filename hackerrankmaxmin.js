function ABC(givenArray,totalArray,round){
    let max =0 
    
    for(let i=0;i<4;i++){
        max = max + givenArray[i]
    }
    let A = EFG (givenArray)
    
    round = round +1 
    totalArray.push(max)
    if(round <givenArray.length){
            ABC(A,totalArray,round)
    }
    

    let result = maxmin(totalArray)
    return [result[0] , result[1]]
}

function maxmin(finalArray){
    let max = finalArray[0];
    let min = finalArray[0]; 
    
    for (let i=0;i<finalArray.length;i++){
        if(finalArray[i] > max){
            max = finalArray[i]
        }
        if(finalArray[i]<min){
            min = finalArray[i]
        }
        
    }
    return [min,max] 
}

function EFG(givenArray){
    let last;
    let B =[]
    for(let j=0;j<givenArray.length;j++){
        if(j==0){
            
            last = givenArray[j]
        }
        else{
            
            B.push(givenArray[j])
        }
    }
    B.push(last)
    return B
}

console.log(ABC([1,2,3,4,5],[],0))
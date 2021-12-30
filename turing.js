// array = ['5','2','C','D','+']
array = ['5','-2','4','C','D','9','+','+']

var final =[]
for(let i =0 ;i<array.length;i++){
    if(array[i] =='+' || array[i]=='C' || array[i]=='D'){
        if(array[i] =='C'){
            final.splice(final.length-1,1)
        }
        if(array[i] =='D'){
            console.log(final.length)
            final.push(final[final.length-1]*2)
        }
        if(array[i] =='+'){
            console.log(final.length)
            let a = final[final.length -1 ] + final [final.length -2]
            final.push(a)
        }
    }
    else{
        final.push(parseInt(array[i]))
    }
}

console.log('final',final)

let value = 0
final.forEach(element => {
    value = value +element
});
console.log(value)
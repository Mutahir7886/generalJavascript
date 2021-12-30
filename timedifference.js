

function ABC (a){
    if(a.includes('am')){

        let alpha = a.split(':')
        return [parseInt(alpha[0])*60,parseInt(alpha[1])]
    
    
    }
    if (a.includes('pm')){
        let c= a.split(':')
        let d= c[1].split(' ')
        let e = parseInt(c[0]) ==12? parseInt(c[0]): parseInt(c[0]) +12 
        return [e*60 , parseInt(d[0])]
    
    }
    
}



function calculate(){
    let step1 = ABC(start)[0] + ABC(start)[1]
    let step2= ABC(end)[0]+ABC(end)[1]
    let step3= step1 - step2
    
     if(step3 < 0){
         return (step3 / 60)* -1
     }
    return  step3/60 
}

function toBeWritten(value){


// if PM to AM 

if(start.includes('pm') && (end.includes("am"))){
    value = value -24
}



if(value<0){
    value=value*-1
}
console.log(value)

return value*60


//if AM to PM 

// simple result

}



// calculate()

str = '9:20am-11:20am'
let [start,end]= str.split('-')
console.log(start,end)
console.log(ABC(start))

console.log(ABC(end))

console.log(calculate())

let value = calculate()

console.log(toBeWritten(value))

// function check (){

//     let id = 2
//     return id!=-1
// }

// console.log(check())
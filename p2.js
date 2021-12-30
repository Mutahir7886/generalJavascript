/*
Create a function that returns a list of first 50 prime numbers
*/

function firstFiftyPrimeNumbers(){
    let num = [];
    for (let i=0; i<=10; i++){
        
        if ((i%2===0 && i/2===1) || (i%3===0 && i/3===1) || (i%5===0 && i/5===1) || (i%7===0 && i/7===1)){
            num.push(i);
        }
    }
    for (let i=11; i<=500; i++){
        
        if (i%2!==0 && i%3!==0 && i%5!==0 && i%7!==0){
            num.push(i);
        }
      
    }
    num.length = 50;
    console.log('First 50 prime numbers are: \n', num);
}

firstFiftyPrimeNumbers();

// PALINDROME

function palindrome(a){
    let length=parseInt(a.length/2)
    
    // console.log(length)
    let check=0
    for (let i=0;i<length; i++){
    
        if(a[i]==a[a.length - 1 -i])
        {
            continue
        }
        else{
             check =1;
             break
        }
    }
    
    if (check ==0){
        console.log('YEs')
    }
    else{
        console.log("NO")
    }
}

string_check='12321'
palindrome(string_check)


//FACTORIAL 

function factorial(n){
    fact=1
    for (let i=n ; i>=1;i--){
        fact = fact *i
    }
    console.log('factorial',fact)
}

factorial(5)


//PRIME NUMBERS

primeNumber=[]

function isPrime(n){
    for (let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true 
}


function listPrimeNumbers(number){
    for ( let k =2;k<=number;k++){
        if (isPrime(k)){
            primeNumber.push(k)
        }
        else{
            continue
        }
    }
    console.log(primeNumber)
}

listPrimeNumbers(100)


//SMALLEST INTEGER


aa=[2,4,5,6,1,3]
let min=aa[0]
for (let i =1;i<aa.length;i++){
    if(aa[i]<min){
        min=aa[i]
    }
    else{
        continue
    }

}
console.log(min)
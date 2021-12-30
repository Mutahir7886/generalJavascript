function fibo(n)
{
    if (n<=1){

        return n;
    }
    else {
        return fibo(n-1) + fibo(n-2)
    }
}

for(let i=0;i<10;i++){
    console.log(fibo(i))
}

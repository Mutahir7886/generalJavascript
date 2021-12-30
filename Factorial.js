function factorial(n){
    let fn=1;
    let a = [];
    for (let i=1; i<=n; i++){
        a.push(i);
    }
    for (let j=0; j<a.length; j++){
        fn = fn * a[j];
    }
    console.log(`The Factorial of ${n} is:`, fn);
}
factorial(5);
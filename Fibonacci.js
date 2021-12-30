
function fibonacci(n){
    let f=[0, 1];
    
    for (let i=2; i<=n; i++){
        f[i] = f[i-1] + f[i-2];       
}
console.log(`The Fibonacci series of first ${n} numbers is:`, f.join(' '));
}
fibonacci(4);
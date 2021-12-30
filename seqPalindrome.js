
let a ='abbbcddebdbbabcbazzsdfgghjkll'
let final =[];
let prev=' ';
console.log(prev.length)
for(let i =0 ;i<a.length;i++){
   
    if ((prev && prev.length >0) && a[i] !== prev[0]){
        prev=a[i]
    }
    else{
        prev = prev + a[i]
        if(a[i] !== a[i+1]){
            final.push(prev)
        }
    }
}
console.log(final)
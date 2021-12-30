a='()))'
obj={}
for(let i=0;i<a.length;i++){
    
    if(a[i] in obj){
        console.log(a[i],obj)
        obj[a[i]]=obj[a[i]] +1
    }
    else{
        obj[a[i]] = 1
        console.log('obj in else',obj)
    }
}

console.log ((obj['('] - obj[')'])*-1)

console.log(obj)
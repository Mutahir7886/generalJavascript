obj ={
    a:2,b:1,c:3,d:7,e:5,f:10,g:12,h:4,i:100,k:6,l:50
}
array=[]
for(let key of Object.keys(obj)){
    array.push([key,obj[key]])
}

console.log(array)
//
// array.sort((a, b) => (a > b ? -1 : 1))



array = [ 2,3,1,4,5,41,23]

array.sort((a, b) => (a[1] > b[1] ? -1 : 1))
console.log(array)

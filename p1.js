/*
Crete a function in which I will pass a list of integers and it should return the smallest integer.
*/

let temp =0;
function smallestInt(arr){
    for (let i=0; i<=arr.length; i++){
        for (let j=0; j<=arr.length; j++){
            if (arr[j] > arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                temp = arr[j+1];
            }
            
        }
        
    }
    console.log('Smallest integer is:', arr[0]);      
    
}
smallestInt([1, 5, 9, 7]);




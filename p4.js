/*
Program to sort a list.
*/ 

function sortedArray(num){
for (let i=0; i<num.length; i++){
    for (let j=0; j<num.length; j++){
        if (num[i] < num[j]){
            let temp = num[i];
            num[i] = num[j];
            num[j] = temp;
        }
    }
}
console.log('Sorted Array is:', num);
}
sortedArray([8, 2, 6, 9, 1, 0, 12, -1]);

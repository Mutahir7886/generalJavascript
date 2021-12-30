/*
Write a function that will receive a list as input and it will filter a list of all even numbers from list. 
*/ 

let n=[];
function returnEvenNums(nums){
    for (let i=0; i<nums.length; i++){
        if (nums[i] % 2 === 0){
            n.push(nums[i]);
        }
    }
    console.log(n);
}
returnEvenNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
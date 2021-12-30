/* 
Program will take 2 inputs. One is element, other is index. Insert that element at that index of list.
*/

let nums = [2, 4, 6, 8, 10];
let n =[];
function insertElement(ele, ind){
    
    for (let i=0; i<ind; i++){
        n.push(nums[i]);
    }

    n.push(ele);
    
    for (let j=ind; j<nums.length; j++){
        n.push(nums[j]);
    }
console.log(n);
}

insertElement(7, 3);

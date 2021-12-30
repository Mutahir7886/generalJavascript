/*
Create a function in which a string like '125' is returned as an integer in the form 1*2*5=10.
*/ 

let num = [];
let b=1;
function StrToInt(str){
    for (let i=0; i<str.length; i++){
        let a = str.charAt(i);
        num.push(a);
    }

    for (j=0; j<num.length; j++){
        b = b * num[j];
    }

    console.log(`The value of ${str} after converting it into integer is:`, b);

}
StrToInt('125');

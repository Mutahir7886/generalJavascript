function isPalindrome(str){
    let a = [];
    let b = [];
    let c;
    let d;
    for (let i=0; i<str.length; i++){
        a.push(str.charAt(i));
        c = a.join('');
    }
    for (let j=str.length-1; j>=0; j--){
        b.push(str.charAt(j));
        d = b.join('');
    }
    if (c === d){
        console.log(`The given string ${str} is Palindrome.`);
    }
    else {
        console.log(`The given string ${str} is NOT Palindrome.`);
    }

}
isPalindrome('malayalam');
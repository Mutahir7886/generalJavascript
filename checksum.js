
function check(a , k){


for (let i = 0 ; i <a.length ; i++)
{
    if (k - a[i] in a )
    {
        return true
    }
}
return false
}

a=[4,5,6,7]
k=11

console.log(check(a,k))


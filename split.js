let obj = {A:[8,9,10,5] ,B:[7,8,4,3],C:[10,11,12,13]}
onj1={} , b=[] , c=1
for (const [key, value] of Object.entries(obj)) {
    if (c==1)
    {
        for (let i=0;i<value.length;i++)
        {
            onj1[key] = value[i]
            b.push(onj1)
            onj1={}
        }
    }
    else{
        for (let i=0;i<value.length;i++)
        {
            b[i][key] = value[i]
        }
    }
    
    c=c+1
  }

console.log(b)
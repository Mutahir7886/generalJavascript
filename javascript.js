
// a=5
// console.log(a)

// let a;


// abc={
//     title:'123',
//     a(){
//         console.log(this)
//     }
// }

//  const a  = new abc

//  a.a()


// let a =()=>{
//     console.log(this)
// }

// let b = new a()

// const increment = (num) =>  num + 1;num +2
// console.log(increment(41)); // => 42


// // function a(){
// //     return 'a'
// // }

// // console.log(a())
// name = '123'
// a={
//     name:'asdasd',
//     abc:()=>{
//         console.log(this.name)
//     },
//     efg(){
//         console.log(this.name)
//     }
// }

// a.abc()
// a.efg()

var avs = 1;
function a(name){
    
    // console.log(this)
}

// a()



// this pointer
function abc(){
    this.myvar = 200
}

var obj1 = new abc()
var obj2 = new abc()
obj2.myvar = 300

// console.log(obj1.myvar)
// console.log(obj2.myvar)


//CALL BIND 

var myVar = 100;

function WhoIsThis(abc,xyz) {

    console.log(this.myVar  , abc , xyz);
}

var obj1 = { myVar : 200 };

var obj2 = { myVar : 300};


 WhoIsThis.apply(obj1,[1,2])


 const b = function a(){
     return 4
 }

 console.log(b())


//  const myObject = {
//     myMethod(items) {
//      console.log(this); // logs myObject 
//      const callback = () => {
//       console.log(this); // this takes value from myMethod(outer func)    
//      };
//      items.forEach(callback);
//     }
//   };
  
//   myObject.myMethod([1, 2, 3]);


  var q=3;
  
  function abcdf(){
    console.log(this.avs)
  }

 console.log(abcdf())

 var myVar = 100;

function WhoIsThis() {
    var myVar = 200;

    console.log("myVar = " + myVar); // 200
    console.log("this.myVar = " + this.myVar); // 100
}

WhoIsThis();


const abcde ={
    a:2,    getvalue(){
        console.log(this.a)
    }
}

abcde.getvalue()
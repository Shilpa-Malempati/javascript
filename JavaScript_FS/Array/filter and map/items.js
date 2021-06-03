var  items = [
    {
        id:01,
        name:"lipstick",
        price:850
    },
    {
        id:02,
        name:"eyelinear",
        price:500
    },
    {
            id:03,
            name:"shampoo",
           price:900
    },
    {
            id:04,
            name:"Rakhi",
            price:250
    }
]
// console.log(items[0]);
// console.log(items[1]);
// console.log(items[2]);
// console.log(items[3]);


//instead of use for in

for(var list of items){
    console.log('one',list);
}

var afterfilter = items.filter( item => {return item.price > 500});
console.log('after filter',afterfilter);

//map wrt debugging in source file 
 var mappedlist = items.map(function(item) {
     //debugger  //it helps to stop line 39
      
      console.log(item)
       var v = {
        id:item.id,
        name:item.name,
        price:item.price + 50
    }
      return  console.log(v) ;
      
      })

      //debugger
    //  console.log(v);
 

//mapping using for the multiple properties


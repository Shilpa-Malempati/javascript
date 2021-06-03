//String Conversions (used when we need a string from the value)

var value = true;
alert(typeof value); // boolean

values = String(value); // now value is a string "true"
alert(typeof values); // string




//Numeric Conversions (used in  mathematical functions and expressions )

//eg:1
alert( "6" / "2" ); // 3, strings are converted to numbers

//eg:2
var str = "123";
alert(typeof str); // string

var num = Number(str); // becomes a number 123
alert(typeof num); // number





//Boolean Conversions (Logical operators
//empty , null, empty string, undefined becomes false , rest all true )
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
alert( Boolean(" "));  //true
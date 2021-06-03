// Encoding
//encodeURI (used to encode a URI)
//encodeURIComponent (function encodes special characters, except: , / ? : @ & = + $ #)
//return value is a string

//encodeURI
var uri = "my test.asp?name=ståle&car=saab";
var res = encodeURI(uri);
console.log('the encoded uri is',res);

//encodeURIComponent
console.log('the encoded uri component',encodeURIComponent(res));


//Decoding
//decodeURI (used to decode a URI)
//decodeURIComponent
//return value is a string

var uri = "my name.asp.?username=Nikith&password=qwerty";
var enco = encodeURI(uri);
console.log('the encoded uri is', enco);
var deco = decodeURI(enco);
console.log('the decoded uri is', deco);




//decodeURIComponent
console.log('the new encoded uri component',encodeURIComponent(res));
console.log('the new decoded uri component ', decodeURIComponent(res));

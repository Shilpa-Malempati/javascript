function notification(sms,email){
console.log("Process Starts");
sms();
email();
}
notification(function (){
alert('send sms');
},
function(){
    alert('send email');
});
console.log('End process');
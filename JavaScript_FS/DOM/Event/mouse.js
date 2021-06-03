// calling events through html file
function addStyle(){
    const mouseele = document.getElementById('add');
    mouseele.className='addstyle';
}
function removeStyle() {
   const mouseout= document.getElementById('add');
   mouseout.className="removestyle";
}



//calling events through js
const bElement=document.getElementById('one');
bElement.onclick = function (){
    alert('you clicked me!!!');
}







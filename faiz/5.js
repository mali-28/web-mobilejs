

function rmv(){
   var myobj = document.getElementById("1");
  myobj.remove();
}

function edit(flag){
   var a = `
   <td>0001</td>
   <td id= "display1">1</td> 
   <td id="display1-1">2020</td>   
   <td id="display1-2"><button type="button" onclick=" edit(true)">Edit</button>
   <button id="display1NAme5" type="button" onclick=" rmv()">Delete</button></td> `;

   var b = `
   <td>0001</td>
   <form>
   <td ><input type="text" id="display1-a"  value="2"></td> 
   <td ><input type="text" id="display1-b" value="2020"></td>   
   <td id="display1Name4"><button type="button"  onclick=" edit(false)">OK</button></td>
  </form>`;

  
var displayRow;
if(flag === true){
  displayRow = b;
}else{
   displayRow = a;
}
document.getElementById('1').innerHTML = displayRow;
}

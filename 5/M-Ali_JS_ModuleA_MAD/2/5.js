


function expand(flag){
   var table_1 = `<table border="1px" style = 'padding: 3px; margin : 10px auto;'>
   <tr>
     <td>Item</td>
     <td>Watch</td>
   </tr>
   <tr>
       <td>Colour</td>
     <td>Black</td>  
   </tr>
   <tr>
     <td colspan="2" style="text-align: right;"><a href="javascript:void(0)" onClick="expand('more')"><em>Click for more...</em></a></td>
     
 </tr>
</table>`;


var table_2 = `<table border="1px" style = 'padding: 3px; margin : 10px auto;'>
  <tr>
    <td>Item</td>
    <td>Watch</td>
  </tr>
  <tr>
    <td>Colour</td>
    <td>Black</td>  
  </tr>
  <tr>
    <td>Price</td>
    <td><del>$40</del></td>
  </tr>
  <tr>
       <td>New Price</td>
       <td>$30</td>
   </tr>
   <tr>
   <td colspan="2" style="text-align: right;"><a href="javascript:void(0)" onClick ="expand('less')"><em>Click for less...</em></a></td>
     
 </tr>

</table>`;



var genericParaVariable;

  if ( flag === "more") {
    genericParaVariable = table_2;
  } else {
    genericParaVariable = table_1;
  }
  document.getElementById("tableReader").innerHTML = genericParaVariable;
}



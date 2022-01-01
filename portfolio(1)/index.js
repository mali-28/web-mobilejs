document.getElementById("button-start").addEventListener("mouseover", arrow_d);
document.getElementById("button-start").addEventListener("mouseout", arrow_r);

function arrow_d() {
  document.getElementById("arrow-r").style.transform = "rotate(90deg)";
}

function arrow_r() {
  document.getElementById("arrow-r").style.transform = "rotate(0deg)";
}






// function color_p() {
//   document.getElementsByClassName("nav-link").style.color = "pink";
// }


document.getElementById('blog-col-1').addEventListener('mouseover', function(){
  document.getElementById('blog-col-2').style.opacity = '0.5';
  document.getElementById('blog-col-3').style.opacity = '0.5';
  document.getElementById('blog-col-4').style.opacity = '0.5';
  document.getElementById('card-title-1').style.color = '#05C2C9';
  
});

document.getElementById('blog-col-2').addEventListener('mouseover', function(){
  document.getElementById('blog-col-1').style.opacity = '0.5';
  document.getElementById('blog-col-3').style.opacity = '0.5';
  document.getElementById('blog-col-4').style.opacity = '0.5';
  document.getElementById('card-title-2').style.color = '#05C2C9';
  
});


document.getElementById('blog-col-3').addEventListener('mouseover', function(){
  document.getElementById('blog-col-1').style.opacity = '0.5';
  document.getElementById('blog-col-2').style.opacity = '0.5';
  document.getElementById('blog-col-4').style.opacity = '0.5';
  document.getElementById('card-title-3').style.color = '#05C2C9';

  
});

document.getElementById('blog-col-4').addEventListener('mouseover', function(){
  document.getElementById('blog-col-1').style.opacity = '0.5';
  document.getElementById('blog-col-2').style.opacity = '0.5';
  document.getElementById('blog-col-3').style.opacity = '0.5';
  document.getElementById('card-title-4').style.color = '#05C2C9';
  
});


document.getElementById('blog-col-1').addEventListener('mouseout', function(){
  document.getElementById('blog-col-2').style.opacity = '1';
  document.getElementById('blog-col-3').style.opacity = '1';
  document.getElementById('blog-col-4').style.opacity = '1';
  document.getElementById('card-title-1').style.color = '#000';
  
});

document.getElementById('blog-col-2').addEventListener('mouseout', function(){
  document.getElementById('blog-col-1').style.opacity = '1';
  document.getElementById('blog-col-3').style.opacity = '1';
  document.getElementById('blog-col-4').style.opacity = '1';
  document.getElementById('card-title-2').style.color = '#000';
  

  
});

document.getElementById('blog-col-3').addEventListener('mouseout', function(){
  document.getElementById('blog-col-1').style.opacity = '1';
  document.getElementById('blog-col-2').style.opacity = '1';
  document.getElementById('blog-col-4').style.opacity = '1';
  document.getElementById('card-title-3').style.color = '#000';
  
  
});

document.getElementById('blog-col-4').addEventListener('mouseout', function(){
  document.getElementById('blog-col-1').style.opacity = '1';
  document.getElementById('blog-col-2').style.opacity = '1';
  document.getElementById('blog-col-3').style.opacity = '1';
  document.getElementById('card-title-4').style.color = '#000';
  
  
});

window.onscroll = function() {myFunction()};

function myFunction() {
  
  var bodyHeight  = document.body.offsetHeight;
  // console.log(bodyHeight);
  var bodyInnerHeight = bodyHeight- 625;
  // var bodyInnerHeightFirst = bodyHeight - 125;
// console.log(bodyHeightLast);
// console.log(document.body.scrollTop);
console.log(document.documentElement.scrollTop, bodyInnerHeight);
  if (document.documentElement.scrollTop >= 0 && document.documentElement.scrollTop < 600){
    document.getElementById("nav-link-1").style.color = "#E31C6E";
    document.getElementById("nav-link-2").style.color = "#ccc";
    document.getElementById("nav-link-3").style.color = "#ccc";
    
  }else if(document.documentElement.scrollTop > 600 && document.documentElement.scrollTop < 1200){
    
    document.getElementById("nav-link-2").style.color = "#E31C6E";
    document.getElementById("nav-link-1").style.color = "#ccc";
    document.getElementById("nav-link-3").style.color = "#ccc";
    document.getElementById("nav-link-4").style.color = "#ccc";


  }else if(document.documentElement.scrollTop > bodyInnerHeight-900 && document.documentElement.scrollTop <= bodyInnerHeight-200){
    // console.log(document.documentElement.scrollTop);

    document.getElementById("nav-link-4").style.color = "#E31C6E";
    document.getElementById("nav-link-2").style.color = "#ccc";
    document.getElementById("nav-link-3").style.color = "#ccc";

    document.getElementById("nav-link-5").style.color = "#ccc";

  }else if(document.documentElement.scrollTop > bodyInnerHeight-200 && document.documentElement.scrollTop <= bodyInnerHeight){
    // console.log(document.documentElement.scrollTop);

    document.getElementById("nav-link-5").style.color = "#E31C6E";
    document.getElementById("nav-link-4").style.color = "#ccc";
    document.getElementById("nav-link-2").style.color = "#ccc";

  }
  else{
    document.getElementById("nav-link-3").style.color = "#E31C6E";
    document.getElementById("nav-link-2").style.color = "#ccc";
    
    document.getElementById("nav-link-4").style.color = "#ccc";


  }
};

// console.log(document.body.offsetHeight);
// console.log(document.body.scrollHeight);


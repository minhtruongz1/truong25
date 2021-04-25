var div1 = document.getElementById("div1");
var bai1 = document.getElementById("bai1");
bai1.onclick = function(){
    div1.classList.toggle("hidden");
}


var div2 = document.getElementById("div2");
var bai2 = document.getElementById("bai2");
bai2.onclick = function(){
 var div2color = Math.floor(Math.random()*16777215).toString(16);
  div2.style.backgroundColor = "#" + div2color ;
}


var bai3 = document.getElementById("bai3");
var div3 = document.getElementById("div3");
var div30 = document.getElementById("div30");

bai3.onclick = function(){
    var tg1 = div3.textContent;
    var tg2 = div30.textContent;
    div30.innerHTML = tg1.toString();
    div3.innerHTML = tg2.toString(); 
}

var bai4 = document.getElementById("bai4");
var div4 = document.getElementById("div4");
var size = 14 ;
bai4.onclick = function(){
   size = size + 1;
   div4.style.fontSize = size +"px";
}


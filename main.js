function time(){
    var date= new Date();
    var month = date.getMonth();
    var day =  date.getDate();
    var year = date.getFullYear();
    var hr = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ampm = hr >= 12 ? 'pm' : 'am';
     if(m < 10){
         m = "0" + m
    }
    if(s < 10)
    {
        s = "0" + s
    }

    document.getElementById("time").innerHTML = hr + ":" + m + ampm+"</br>"+month+"/"+day+"/"+year;
    setTimeout("time()",100)
}

function funce() {
    var e = document.querySelector("#ss")
if(e.style.visibility == 'hidden')
       e.style.visibility ="visible";
    else
       e.style.visibility= "hidden";
 }
 function vol() {
    var d = document.querySelector(".range-slider");
if(d.style.display == 'none')
       d.style.display = 'block';
    else
       d.style.display = 'none';
 }



 function vol() {
    var d = document.querySelector(".range-slider");
if(d.style.display == 'none')
       d.style.display = 'block';
    else
       d.style.display = 'none';
 }




var slider = document.querySelector(".input-range");
var output = document.querySelector(".range-value");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}


let toggle = false;

var sd = function(){
wifimod = document.querySelector("#ssd");
    if(toggle == false){
        wifimod.style.visibility ="visible";
        wifimod.style.animationName ="open";
        wifimod.style.animationDuration ="2s";
        wifimod.style.animationFillMode - "forwards";
        wifimod.style.animationIterationCount -"initial";
        toggle= true;

    }
    else if(toggle == true){
        wifimod.style.visibility ="hidden";

        toggle= false;
    }



};
function opensss() {
    var f = document.querySelector(".sese ")
    if(f.style.display == 'none')
       f.style.display ="block";
       else
       f.style.display= "block";
 }

 function openssss() {
    var f = document.querySelector(".sese ")
    if(f.style.display == 'block')
       f.style.display ="none";
    else
       f.style.display= "none";
 }


minitogle = false;
 function mini() {
    var f = document.querySelector(".sese ")
    var d = document.querySelector(".gg ")
    if(minitogle == false){
        d.style.width="400px";
        f.style.width="500px";
        f.style.height="500px";
  
        minitogle = true;


    }
    else if(minitogle = true){
        d.style.width="573px";
        f.style.width="100%";
        f.style.marginTop="0px";

        minitogle = false;

    }

   
    

 }

//Make the DIV element draggagle:
dragElement(document.querySelector(".sese"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
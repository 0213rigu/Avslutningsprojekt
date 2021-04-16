//window.onresize = function() {checkFunction};
//function checkFunction(){
window.onresize= function() { console.log(window.innerWidth); }
if(window.innerWidth >=1200){
 window.onscroll = function() {scrollFunction()};

 

 function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("navbar").style.height="9vh";
        document.getElementById("navbar-a1").style.cssText="font-size: 200%; color: rgba(255,255,255,0.3) ";
        document.getElementById("navbar-a2").style.cssText="font-size: 200%; color: rgba(255,255,255,0.3) ";
        document.getElementById("navbar-a3").style.cssText="font-size: 200%; color: rgba(255,255,255,0.3) ";

    }
    else{
        document.getElementById("navbar").style.height="20vh";
        document.getElementById("navbar-a1").style.cssText="font-size: 400%; color: rgba(255,255,255,1) ";
        document.getElementById("navbar-a2").style.cssText="font-size: 400%; color: rgba(255,255,255,1) ";
        document.getElementById("navbar-a3").style.cssText="font-size: 400%; color: rgba(255,255,255,1) ";
    }

  }
}
else{

}
if(window.innerwidth <1200 ){
document.getElementById("arrow").style.top="20vh";
}
//}
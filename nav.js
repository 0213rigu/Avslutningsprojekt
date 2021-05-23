//window.onresize = function() {checkFunction};
//function checkFunction(){
var openNav = document.getElementById('arrowicon');
window.onload = function () {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1200) {
        window.onscroll = function () { scrollFunction() };
    }
    if (window.innerwidth < 1200) {

    }

    else {

    }
    $('#nav-icon1').click(function(){
		$(this).toggleClass('open');
        document.getElementById('linkDiv').classList.toggle('open');
	});
}


 function arrowFunction() {
    document.getElementById('arrowimg').classList.toggle('active');
    document.getElementById('linkDiv').classList.toggle('active');
    document.getElementById('arrowicon').classList.toggle('active');
}
function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        document.getElementById("linkDiv").style.height = "9vh";
        document.getElementById("navbar-a1").style.cssText = "font-size: 200%; color: rgba(255,255,255,0.3) ";
        document.getElementById("navbar-a2").style.cssText = "font-size: 200%; color: rgba(255,255,255,0.3) ";


    } else {
        document.getElementById("navbar-a1").style.cssText = "font-size: 400%; color: rgba(255,255,255,1) ";
        document.getElementById("navbar-a2").style.cssText = "font-size: 400%; color: rgba(255,255,255,1) ";

    }

}




window.onresize = function () {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1200) {
        window.onscroll = function () { scrollFunction() };
    } else {
        document.getElementById("arrow").style.top = "20vh";
        window.removeEventListener("onscroll", scrollFunction);
    }

}
    //}

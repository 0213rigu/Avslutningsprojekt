var procent = 87;

function collectvalue(){
    var goalname = document.getElementById("goal").value;
    document.getElementById("goalname").innerHTML = goalname;
    var goalrange = document.getElementById("goalnmbr").value;
    var goalunit = document.getElementById("goalunit").value;
    document.getElementById("goalprogress").innerHTML = "0/" +  goalrange + " " + goalunit;
   /* document.getElementById("goalnmbr").style.display = "none";
    document.getElementById("nmbrlbl").style.display="none";*/
    procent = 0;
    prgrscalc();
   
}


window.onload = function prgrscalc() {
document.getElementById("prgrsfill").style.strokeDashoffset = "calc( 440 - (440 *" + procent + ") / 100)" ;
}


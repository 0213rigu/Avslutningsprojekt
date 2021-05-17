var procent = 87;
var goalprogress = 0;
var goalline = 0;
 function prgrscalc() {
    document.getElementById("prgrsfill").style.strokeDashoffset = "calc( 440 - (440 *" + procent + ") / 100)" ;
    }

window.onload = prgrscalc;


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
    $("#unitlbl").remove();
    $("#add").show();
    $("#submit").remove();
    $("#goallbl").remove();
    $("#goalunit").remove();
    $("#goal").remove();

    document.getElementById("nmbrlbl").innerHTML = "Add progress";
    goalline = goalrange;
    console.log(goalline);
}


function addprgrs( ){
    let addval = document.getElementById("goalnmbr").value;
    goalprogress = goalprogress + addval;
    procent = goalprogress/goalline;
    console.log(procent);
    prgrscalc();
}



var procent = 0;
var goalprogress = 0;
var procenttxt = 0;
var goalrange = 0;
var goalunit = "unit";
 function prgrscalc() {
    document.getElementById("prgrsfill").style.strokeDashoffset = "calc( 440 - (440 *" + procent + ")" ;
    procenttxt = Math.round(procent*100);
    document.getElementById("percentnmbr").innerHTML = procenttxt;
    document.getElementById("goalprogress").innerHTML = goalprogress + "/" + goalrange + " " + goalunit;
    }

window.onload = prgrscalc;


function collectvalue(){
    var goalname = document.getElementById("goal").value;
    document.getElementById("goalname").innerHTML = goalname;
    goalrange = document.getElementById("goalnmbr").value;
    goalunit = document.getElementById("goalunit").value;
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

}


function addprgrs( ){
    if(procent<1){
    let addval = document.getElementById("goalnmbr").value;
    goalprogress = parseInt(goalprogress) + parseInt(addval);
    procent = goalprogress/goalrange;
    console.log(procent);
    prgrscalc();
    if(procent>1){
        procent=1;
        goalprogress=goalrange;
        prgrscalc();
    }
    }
    else{
        procent = 1;    
        goalprogress=goalrange;
        prgrscalc();
    }
}



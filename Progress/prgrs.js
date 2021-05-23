var procent = 0;
var goalprogress = 0;
var procenttxt = 0;
var goalrange = 0;
var goalunit = "unit";
let addNmbr= 0;

function prgrscalc() {
    document.getElementById("prgrsfill").style.strokeDashoffset = "calc( 440 - (440 *" + procent + ")";
    procenttxt = Math.round(procent * 100);
    document.getElementById("percentnmbr").innerHTML = procenttxt;
    document.getElementById("goalprogress").innerHTML = goalprogress + "/" + goalrange + " " + goalunit;
}

window.onload = prgrscalc;


function collectvalue() {
    var goalname = document.getElementById("goal").value;
    document.getElementById("goalname").innerHTML = goalname;
    goalrange = document.getElementById("goalnmbr").value;
    goalunit = document.getElementById("goalunit").value;
    document.getElementById("goalprogress").innerHTML = "0/" + goalrange + " " + goalunit;
    procent = 0;
    prgrscalc();
    $("#unitlbl").remove();
    $("#add").show();
    $("#submit").remove();
    $("#goallbl").remove();
    $("#goalunit").remove();
    $("#goal").remove();

    document.getElementById("nmbrlbl").innerHTML = "Add progress";

    addData();
}
//Grafer
let chartData = [0];
let chartName = ["addition 0"];

function addprgrs() {
    addNmbr++;
    let xaxis = "Addition " + addNmbr;
    chartName.push(xaxis);
    console.log(chartName);
    if (procent < 1) {
        let addval = document.getElementById("goalnmbr").value;
        goalprogress = parseInt(goalprogress) + parseInt(addval);
        procent = goalprogress / goalrange;
        if (procent<1){
            chartData.push(goalprogress);
            prgrscalc();
            console.log(chartData);
            addData();
        }
        if (procent >= 1) {
            procent = 1;
            goalprogress = parseInt(goalrange);
            chartData.push(goalprogress);
            prgrscalc();
            console.log(chartData);
            addData();
        }
    } else {
        procent = 1;
        goalprogress = goalrange;
        prgrscalc();

    }
}

let myChart = document.getElementById("myChart").getContext('2d');

function addData() {
    
    document.getElementById("chartDiv").style.display="flex";
    lineChart.data.datasets[0].data = chartData;
    lineChart.data.labels = chartName;
    lineChart.options.scales.y.suggestedMax = goalrange;
    lineChart.update();
    
}
let lineChart = new Chart(myChart, {
    type: 'line',
    data: {
        labels: [
        ],
        datasets: [{

            label: 'Goal Progress',

            data: [
            ],

            borderColor: 'purple',


        }]

    },
    options: {
        scales : {
            y:{
                suggestedMin: 0,
            }
        }
    }
});

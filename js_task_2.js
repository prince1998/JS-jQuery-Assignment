const qTeams = {
    aaiec: 400, 
    aaiwc: 60, 
    qai: 200, 
    poc: 100,
    gtm: 50,
    hr: 10
};

var output = [];

for (var team in qTeams) {
    output.push([team, qTeams[team]]);
}

output.sort((a, b) => b[1] - a[1]);

for (var key in output){
    console.log(`${output[key][0]} -> ${output[key][1]}`)
}
const CSVToJSON = csv => {
    const lines = csv.split('\n');
    const keys = lines[0].split(',');
    return lines.slice(1).map(line => {
        return line.split(',').reduce((acc, cur, i) => {
            const toAdd = {};
            toAdd[keys[i]] = cur;
            return { ...acc, ...toAdd };
        }, {});
    });
};

/*
var competitionsReader = new FileReader();
var mesCompetitionsCSV = competitionsReader.readAsText("../csv/competitions.csv");
console.log(mesCompetitionsCSV)
*/

const competitionsCsv = `Date,Lieu,Nom
29/29/22,Rochefort,Tournoi Label A de Rochefort
date2,lieu2,nom2
date3,lieu3,nom3
date4,lieu4,nom4
date5,lieu5,nom5
date6,lieu6,nom6
date7,lieu7,nom7
date8,lieu8,nom8
date9,lieu9,nom9 
date10,lieu10,nom10
date11,lieu11,nom11
date12,lieu12,nom12
date13,lieu13,nom13
date14,lieu14,nom14
date15,lieu15,nom15
date16,lieu16,nom16`;

var myJsonCompetitons = CSVToJSON(competitionsCsv);
//console.log(CSVToJSON(competitionsCsv))

var competitionsArray = JSON.parse(JSON.stringify(myJsonCompetitons));

function displayCompetitions(competitionsArray){    
    var emplacement = document.getElementById("competesContent");
    console.log(emplacement);
    var table = document.createElement("table");
    table.setAttribute("style" , "border-spacing : 20px");
    table.setAttribute("id" , "competitions_table");
    var firstLine = document.createElement("tr");
    var header1Place = document.createElement("th");
    header1Place.textContent = "Date";
    var header2Place = document.createElement("th");
    header2Place.textContent = "Lieu";
    var header3Place = document.createElement("th");
    header3Place.textContent = "Nom";
    firstLine.appendChild(header1Place);
    firstLine.appendChild(header2Place);
    firstLine.appendChild(header3Place);
    firstLine.setAttribute("border-spacing" , "500 px")
    table.appendChild(firstLine);
    //console.log(table)
    emplacement.appendChild(table);
    for(var i=0 ; i<competitionsArray.length ; i++)  {
            var row = document.createElement("tr");

                var i_date = competitionsArray[i].Date;
                var dateCell = document.createElement("td");
                dateCell.textContent = i_date ;
                row.appendChild(dateCell);
            
                var i_lieu = competitionsArray[i].Lieu;
                var lieuCell = document.createElement("td");
                lieuCell.textContent = i_lieu;
                row.appendChild(lieuCell);

                var i_nom = competitionsArray[i].Nom;
                var nomCell = document.createElement("td");
                nomCell.textContent = i_nom;
                row.appendChild(nomCell);

        
        table.appendChild(row);
    }
    //console.log(table);
}


function removeTableCompetitions() {
    var body = document.getElementById("competesContent");
    var table = document.getElementById("competitions_table");
    body.removeChild(table);
}
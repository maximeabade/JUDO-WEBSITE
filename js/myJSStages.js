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


const StagesEtExamensCSV = `Date,Lieu,Nom
24/09/22,Serres-Castet,Stage arbitrage Dan
19/11/2022,Serre-Castet,Stage Préparation Grades
19/11/2022,Serre-Castet,Passage de Grade Expression Technique Roullet
03/12/2022,Dax,Stage + UV2 
10/12/2022,Jurançon,Katas
14/01/2023,Orthez,Stage Ne-Waza
28/01/2023,Anglet,Stage Katas + prépa Grades 
25/02/2023,Dax,Katas
25/03/2023,Orthez,Stage + Katas + UV2
27/05/2023,Lormont,Katas
28/05/2023,Lormont,Expression Technique`;

var myStagesAndExamsJSON = CSVToJSON(StagesEtExamensCSV);
//console.log(CSVToJSON(StagesEtExamensCSV))

var StagesEtExamensArray = JSON.parse(JSON.stringify(myStagesAndExamsJSON));

function displayStagesEtExam(StagesEtExamensArray){    
    var emplacement = document.getElementById("stagesEtExamensContent");
    console.log(emplacement);
    var table = document.createElement("table");
    table.setAttribute("style" , "border-spacing : 20px");
    table.setAttribute("id" , "stagesEtExamentsTable");
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
    for(var i=0 ; i<StagesEtExamensArray.length ; i++)  {
            var row = document.createElement("tr");

                var i_date = StagesEtExamensArray[i].Date;
                var dateCell = document.createElement("td");
                dateCell.textContent = i_date ;
                row.appendChild(dateCell);
            
                var i_lieu = StagesEtExamensArray[i].Lieu;
                var lieuCell = document.createElement("td");
                lieuCell.textContent = i_lieu;
                row.appendChild(lieuCell);

                var i_nom = StagesEtExamensArray[i].Nom;
                var nomCell = document.createElement("td");
                nomCell.textContent = i_nom;
                row.appendChild(nomCell);

        
        table.appendChild(row);
    }
    //console.log(table);
}


function removeTableCompetitions() {
    var body = document.getElementById("stagesEtExamensContent");
    var table = document.getElementById("stagesEtExamentsTable");
    body.removeChild(table);
}
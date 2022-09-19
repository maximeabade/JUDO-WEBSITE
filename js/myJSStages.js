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
25/09/22,Rochefort,Tournoi Label A de Rochefort
02/10/2022,Jurançon,Poule de 9
07/10/2022,Grisolles,Tournoi International 
30/10/2022,Tarbes,Tournoi des Cîmes
08/01/2022,Orthez,Poule de 9
22/01/2022,Agen,Championnat Secteur par Équipe
12/03/2022,Région par Équipe, Lormont
18/03/2022,Serres-Castet,Départementales 1ere, 2eme et 3eme DIVISION
26/03/2022,Orthez,Poule de 9 
08/04/2022,Paris,France par Équipe
29/04/2022,Lormont,Région 1ere et 2eme DIVISION
30/04/2022,Lormont,Région 2eme DIVISION
10/06/2022,Paris,Championnat de France 2eme DIVISION
11/06/022,Paris,Championnat de France 3eme DIVISION`;

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
const techniquesATravaillerCSV = `Nom,Details
Ipon Seoi Nage,Aller chercher plus loin en profondeur avec plus de reaction manche et revers
Uchi Mata,Profondeur de mon deplacement + souplesse adducteurs + rotation de buste
Kata Guruma,Reaction pourjambe et l'entrainer dans le bon sens et attaquer aussi cote manche
Okuri Ashi Barai,Meilleure reaction pour provoquer deplacement + doubler les pas du mec en face + pas de Fabio Basil => 1, 2-3 FAST`;

var myJsonTechniques = CSVToJSON(techniquesATravaillerCSV);
//console.log( myJsonTechniques)

var techniquesArray = JSON.parse(JSON.stringify(myJsonTechniques));
//console.log( techniquesArray)
function displayTechniques(techniquesArray) {
    var emplacement = document.getElementById("techniquesContent");
    //console.log(emplacement);
    var table = document.createElement("table");
    table.setAttribute("id" , "techniques_table");
    var firstLine = document.createElement("tr");
    var header1Place = document.createElement("th");
    header1Place.textContent = "Nom";
    var header2Place = document.createElement("th");
    header2Place.textContent = "Details";   
    firstLine.appendChild(header1Place);
    firstLine.appendChild(header2Place);
    table.appendChild(firstLine);
    //console.log(table)
    for(var i=0 ; i<techniquesArray.length ; i++)  {
            var row = document.createElement("tr");
                var i_nom = techniquesArray[i].Nom;
                var nomCell = document.createElement("td");
                nomCell.textContent = i_nom ;
                row.appendChild(nomCell);         
                var i_details = techniquesArray[i].Details;
                var detailsCell = document.createElement("td");
                detailsCell.textContent = i_details;
                row.appendChild(detailsCell);       
        table.appendChild(row);
    }
    console.log(table);
    emplacement.appendChild(table);
    console.log(emplacement)
}



function removeTableTechniques() {document.getElementById("techniquesContent").removeChild(document.getElementById("techniques_table"));}

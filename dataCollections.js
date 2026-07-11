/* let csv = "ID, Name, Occuptation, Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

let selectedCell = 1;

for(let i = 0; i < csv.length; i++){

    let letter = csv[i];

if(letter === ','){
    selectedCell++;

}

else if (letter ==="\n"){
    console.log(cell1, cell2, cell3, cell4);

    cell1 = "";
    cell2 = "";
    cell3 = "";
    cell4 = "";

    selectedCell = 1;
    
}
else if (selectedCell === 1){
        cell1 += letter;

    }
else if (selectedCell === 2){
        cell2 += letter;
    
} else if (selectedCell === 3){
    cell3 += letter;
}
else {
    cell4 += letter;
}
console.log(cell1, cell2, cell3, cell4);
} */

let csv ="ID, Name, Occuptation, Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26";

let rows = csv.split("\n");
let numberOfColumns = rows[0].split(",").length;

console.log(numberOfColumns);

 let csvData = [];

 for(let i = 0; i < rows.length; i++){
    let columns = rows[i].split(",");

    csvData.push(columns);
 }

let headers = csvData[0];

let people = [];

for(let i = 1; i < csvData.length; i++){//putting 1 so it doesnt include header to loop through data row
    let person = {};

    for(let x = 0; x < numberOfColumns; x++){
        person[headers[x].toLowerCase()] = csvData[i][x];
    }
    
    people.push(person);

}

console.log(people);

people.pop();

//adding object to index one

people.splice(1, 0,{

id: "48",
name: "Barry",
occupation: "Runner",
age: "25",

});


//Adding bilbo to end of array with push 

people.push({
    id: "7",
    name: "Bilbo",
    occupation: "None",
    age: "111",
})

console.log(people);
// Transform final set of data back into CSV format....:(

let newCsv ="";
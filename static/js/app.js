// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(tableData);

function loadData(data) {
    tbody.html("");
    data.forEach((sightings) => {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(([key, value]) => {
        var cell = row.append("td");
         cell.text(value);
        });
    });
};

//Tackle this: <input class="form-control" id="datetime" type="text" placeholder="1/11/2011"></input>
// Getting a reference to the button on the page 
// button id="filter-btn" type="button" class="btn btn-default">Filter Table</button> 

// This function is triggered when the date is entered
function handleClick() {
    var inputValue = d3.select("#datetime").property("value");
    let filteredData = tableData
    console.log("A new date was entered");
        if (inputValue) {
            filteredData = filteredData.filter(date => date.datetime === inputValue);
        };
    loadData(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);

loadData(tableData);
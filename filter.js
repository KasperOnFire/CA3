var carTable = function (rows) {
    document.getElementById("tableDiv").innerHTML = "<table class=\"table\"><tr>" +
        "<th>ID</th>" +
        "<th>year</th>" +
        "<th>Make</th>" +
        "<th>Model</th>" +
        "<th>Price</th>" +
        "</tr>" + rows.join("") + "</table>";
};
var carToRow = function (car) {
    return "<tr>" +
        "<td>" + car.id + "</td>" +
        "<td>" + car.year + "</td>" +
        "<td>" + car.make + "</td>" +
        "<td>" + car.model + "</td>" +
        "<td>" + car.price + "</td>" +
        "</tr>";
};

var allRows = cars.map(carToRow);
carTable(allRows);

var inputHtml = "<input type=\"text\" id=\"filterPrice\">" +
    "<input type=\"submit\" id=\"filterPriceButton\" value=\"price Less than\">" +
    "<p id=\"errorMsg\"></p>";

var inputField = function () {
    document.body.innerHTML += inputHtml;

};
inputField();

var button = document.getElementById("filterPriceButton");

var filterTable = function (value) {
    newCars = cars.filter(function (car) {
        return car.price < value;
    });
    var newRows = newCars.map(carToRow);
    carTable(newRows);
};

button.addEventListener("click", function (e) {
    var input = document.getElementById("filterPrice").value;
    if (isFinite(input)) {
        console.log(input);
        filterTable(input);
    } else {
        document.getElementById("errorMsg").value = "Not a Number!";
    }
    e.preventDefault();
});
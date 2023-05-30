var dataList = [];

function displayData() {
    var dataListElement = document.getElementById("data-list");
    dataListElement.innerHTML = "";
    dataList.forEach(function(text) {
        var listItem = document.createElement("p");
        listItem.textContent = text;
        dataListElement.appendChild(listItem);
    });
}

function addText() {
    var textField = document.getElementById("input-field");
    var text = textField.value.trim();
    if (text != "") {
        dataList.push(text);
        textField.value = "";
        displayData();
    }
}

function sortData() {
    dataList.sort();
    displayData();
}

function unsortData() {
    dataList.reverse();
    displayData();
}
let dataList = [];
let originalDataList = [];

function storeOriginalData() {
  originalDataList = [...dataList]; // Create a copy of dataList
}

function unsortData() {
  dataList = [...originalDataList]; // Restore to the original data
  displayData();
}

function displayData() {
  const dataListElement = document.getElementById("data-list");
  dataListElement.innerHTML = "";
  dataList.forEach(function(text) {
    const listItem = document.createElement("p");
    listItem.textContent = text;
    dataListElement.appendChild(listItem);
  });
}

function addText() {
  const textField = document.getElementById("input-field");
  const text = textField.value.trim();
  if (text !== "") {
    dataList.push(text);
    textField.value = "";
    displayData();
  }
}

function sortData() {
  storeOriginalData(); // Store the original data before sorting
  dataList.sort();
  displayData();
}

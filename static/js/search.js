function search(jsonData, searchTerm) {
  let results = [];
  for (let i = 0; i < jsonData.length; i++) {
    for (let property in jsonData[i]) {
      if (jsonData[i].hasOwnProperty(property) && jsonData[i][property].toString().indexOf(searchTerm) > -1) {
        results.push(jsonData[i]);
        break;
      }
    }
  }
  return results;
}

function displayResults(searchResults) {
  let container = document.getElementById("resultsContainer");
  container.innerHTML = "";
  if (searchResults.length > 0) {
    for (let i = 0; i < searchResults.length; i++) {
      let resultDiv = document.createElement("div");
      let resultTitle = document.createElement("a");
      resultTitle.innerText = searchResults[i].title;
      resultTitle.setAttribute('href', searchResults[i].permalink)
      resultDiv.appendChild(resultTitle);
      container.appendChild(resultDiv);
    }
  } else {
    let noResultsMessage = document.createElement("p");
    noResultsMessage.innerText = "没有找到搜索结果。";
    container.appendChild(noResultsMessage);
  }
}

function initiateSearch() {
  let searchTerm = document.getElementById("searchTerm").value;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', '/index.json', true);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let jsonData = JSON.parse(xhr.responseText);
      let searchResults = search(jsonData, searchTerm);
      displayResults(searchResults);
    }
  };
  xhr.send();
}

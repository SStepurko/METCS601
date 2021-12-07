let myRequest = new Request("./my_degrees.json");
const btn = document.getElementById('btn');
const doc = document.getElementById("myTable");

function run() {
    fetch(myRequest)
    .then(checkData)
    .then(json)
    .then(showData)
    .catch(Error)
}

function checkData(response) {
    if (response.status >= 200 && response.status < 300) {
        btn.innerHTML = "ALL OK!";
        btn.className = "btn btn-ok";
        btn.disabled = true;
        return Promise.resolve(response);
      } else {
        throw "Error";
      }  
}

function json(response) {
    return response.json()    
}

function showData(data) {
        for (key in data["my_degree"]) {
            let row = `<tr>
            <td>${data["my_degree"][key]["institution"]["School"]}</td>
            <td>${data["my_degree"][key]["institution"]["Program"]}</td>
            <td>${data["my_degree"][key]["institution"]["Type"]}</td>
            <td>${data["my_degree"][key]["institution"]["Year"]}</td>
            </tr>`;
            doc.innerHTML += row;
        }
        console.log(data);
}

function showError(err) {
    btn.innerHTML = "Error";
    btn.className = "btn btn-err";
    console.log("Request failed", err)
}
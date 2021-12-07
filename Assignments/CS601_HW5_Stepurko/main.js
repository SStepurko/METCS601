let myRequest = new Request("./my_degrees.json");

fetch(myRequest)
    .then(function(resp) {
        console.log(resp);
        if (resp.ok) {
            return resp.json();
        } else {
            throw "error";
        }
    })
    .then(function(data) {
        const doc = document.getElementById("myTable");
        for (key in data["my_degree"]) {
            let row = `<tr>
                        <td>${data["my_degree"][key]["institution"]["School"]}</td>
                        <td>${data["my_degree"][key]["institution"]["Program"]}</td>
                        <td>${data["my_degree"][key]["institution"]["Type"]}</td>
                        <td>${data["my_degree"][key]["institution"]["Year"]}</td>
                      </tr>`;
            doc.innerHTML += row;
            console.log(data["my_degree"][key]);
        }
        console.log(data);
    })
    .catch(console.error())

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
        const doc = document.getElementById("content");
        // console.log(data["my_degree"][0]["institution"]);
        for (key in data["my_degree"]) {
            doc.innerHTML += JSON.stringify(data["my_degree"][key]["institution"]);
            console.log(data["my_degree"][key]);
        }
        console.log(data);
    })
    .catch(console.error())

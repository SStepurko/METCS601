let myRequest = new Request("./my_degrees.json");

fetch(myRequest)
    .then(function(resp) {
        console.log(resp);
        return resp.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(console.error())
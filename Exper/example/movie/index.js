// Retrieve the HTML element with the id 'results' and assign it to the variable mainDiv
const mainDiv = document.getElementById('results');

// Use the Fetch API to make an HTTP GET request to the "https://dummyjson.com/products" endpoint
fetch("https://dummyjson.com/products")
    .then(function(res) {
        // When the response is received, convert it to JSON and return the result
        return res.json();
    })
    .then(function(p) {
        // After the JSON data is obtained, log the entire data to the console
        console.log(p);

        // Assign the JSON data to the variable 'data'
        data = p;

        // Iterate through each element in the 'data' array and log each element to the console
        data.forEach(function(val) {
            console.log(val);
        });
    });

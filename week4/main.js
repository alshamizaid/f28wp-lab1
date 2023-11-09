var cityContainer = document.getElementById("city-info");
var btn = document.getElementById("btn");

// Event listener for button click
btn.addEventListener("click", function(){
    // Create a new XMLHttpRequest
    var ourRequest = new XMLHttpRequest();
    
    // Open a GET request to the specified JSON file
    ourRequest.open('GET', 'https://trisha281005.github.io/F28WP-lab1/week%204/cities1.json');
    
    // Callback function for when the request loads
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        // Call the renderHTML function with the retrieved data
        renderHTML(ourData);
        btn.classList.add("hide-me");
    };
    
    // Send the request
    ourRequest.send();
});

// Function to render HTML based on the data
function renderHTML(data){
    var htmlString = "";
    
    // Loop through the data to create HTML content
    for (i=0; i<data.length; i++){
        htmlString += "<p>" + data[i].name + " is a city in " + data[i].country + ",</br>" +
            "Where you can enjoy indoor places like: " ;
        
        // Loop through the indoor places of the current city.
        for (ii = 0; ii < data[i].places.indoor.length; ii++) {
            // Loop through the indoor places of the current city.
            if (ii == 0) {
                htmlString += data[i].places.indoor[ii];
            } else {
                htmlString += ", and " + data[i].places.indoor[ii];
            }
        }
        
        htmlString += '. & enjoy outdoor places like: ';
        
        // Loop through the outdoor places of the current city.
        for (ii = 0; ii < data[i].places.outdoor.length; ii++) {
            if (ii == 0) {
                htmlString += data[i].places.outdoor[ii];
            } else {
                htmlString += " and " + data[i].places.outdoor[ii];
            }
        }
        
        htmlString += '.</p>';
    }
    
    // Insert the generated HTML into the cityContainer
    cityContainer.insertAdjacentHTML('beforeend' , htmlString);
}

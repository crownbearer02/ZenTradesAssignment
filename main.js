// Function to fetch JSON data from a URL
async function fetchJsonData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching JSON data:", error.message);
        return null;
    }
}

// Function to display data based on requirements
function displayData(jsonData) {
    // Sort the data based on descending popularity
    const sortedData = jsonData.sort((a, b) => b.Popularity - a.Popularity);

    // Display Title, Price ordered based on descending popularity
    sortedData.forEach(product => {
        console.log(`Title: ${product.Title}, Price: ${product.Price}, Popularity: ${product.Popularity}`);
    });
}

// URL of the JSON file
const jsonUrl = "https://s3.amazonaws.com/open-to-cors/assignment.json"; 

// Fetch JSON data
fetchJsonData(jsonUrl)
    .then(productsData => {
        // Check if data was successfully fetched
        if (productsData) {
            // Display the data based on requirements
            displayData(productsData);
        }
    })
    .catch(error => console.error("Error:", error));

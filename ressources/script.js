// Get the list items by their IDs
var fpListItem = document.getElementById("FP");

// Create an image element for the "First Project" image
var fpImage = document.createElement("img");
fpImage.src = "./ressources/images/FP.PNG";
fpImage.alt = "First Project Image";
fpImage.style.display = "none"; // Initially hide the image

// Create a paragraph element for the text
var fpText = document.createElement("p");
fpText.textContent = "My first project!";
fpText.style.display = "none"; // Initially hide the text

// Add click event handler to the "First Project" list item
fpListItem.onclick = function() {
    // Toggle the display property of the associated image and text
    if (fpImage.style.display === "none" || fpImage.style.display === "") {
        fpImage.style.display = "block"; // Show the image
        fpText.style.display = "block";  // Show the text
    } else {
        fpImage.style.display = "none";  // Hide the image
        fpText.style.display = "none";   // Hide the text
    }
    
    // Append or remove the image and text under the list item
    if (fpListItem.contains(fpImage) && fpListItem.contains(fpText)) {
        fpListItem.removeChild(fpImage); // Remove the image
        fpListItem.removeChild(fpText);  // Remove the text
    } else {
        fpListItem.appendChild(fpImage); // Append the image
        fpListItem.appendChild(fpText);  // Append the text
    }
};
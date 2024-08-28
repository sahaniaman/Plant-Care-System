const uploadBox = document.querySelector(".frame12");
const uploadText = uploadBox.querySelector("p");
const uploadInput = document.querySelector("#imageInput"); // Select the existing input element
const browseLink = document.querySelector("#browseLink"); // Select the "Browse" link

// Configure the upload input element
uploadInput.type = "file";
uploadInput.accept = "image/png, image/jpeg, image/webp";
uploadInput.style.display = "none";

// Function to ensure the image element exists
function ensureImageElement() {
  let uploadedImage = uploadBox.querySelector("img");
  if (!uploadedImage) {
      // If no img element exists, create one
      uploadedImage = document.createElement("img");
      uploadedImage.style.display = "none";  // Initially hidden
      uploadBox.appendChild(uploadedImage);
  }
  return uploadedImage;
}

// Function to handle image upload and submission
function handleImageUpload(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
      const uploadedImage = ensureImageElement();
      uploadedImage.src = e.target.result;
      uploadedImage.style.display = "block";  // Display the image
      uploadText.textContent = "Uploading...";

      // Create FormData object and append the file
      const formData = new FormData();
      formData.append('image', file);

      // Send the image to the server via AJAX
      fetch('/predict', {
          method: 'POST',
          body: formData
      })
      .then(response => response.text())
      .then(html => {
          // Replace the entire page content with the new result HTML
          document.open();
          document.write(html);
          document.close();
      })
      .catch(error => {
          console.error('Error:', error);
          uploadText.textContent = "Error uploading image.";
      });
  };
  reader.readAsDataURL(file);
}

// Function to display results
function displayResults(results) {
  const resultSection = document.querySelector('.result_txtArea');
  resultSection.innerHTML = '';  // Clear existing content

  results.forEach(result => {
      const resultBox = document.createElement('div');
      resultBox.className = 'result-box';
      resultBox.innerHTML = `
          <textarea class="plant_name" rows="1" placeholder="Plant Name">${result.label}</textarea>
          <textarea class="h_status" rows="1" placeholder="Health Status">${result.description}</textarea>
          <textarea class="rec" rows="4" placeholder="Recommendation">Recommendation here...</textarea>
      `;
      resultSection.appendChild(resultBox);
  });
  // Optionally, display a refresh button or other UI elements
  const refreshButton = document.createElement('button');
  refreshButton.className = 'r_button';
  refreshButton.textContent = 'Refresh';
  refreshButton.onclick = () => location.reload();  // Reload page on button click
  resultSection.appendChild(refreshButton);
}

// Event listener for drag events on the upload box
uploadBox.addEventListener("dragover", (event) => {
    event.preventDefault();
    uploadText.textContent = "Drop your image here, or browse";
});

// Event listener for drag and drop on the upload box
uploadBox.addEventListener("drop", (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];

    // Check if a file is dropped and if it's an image
    if (droppedFile && droppedFile.type.startsWith("image/")) {
        uploadText.textContent = "Uploading...";
        handleImageUpload(droppedFile);
    } else {
        uploadText.textContent = "Invalid file type. Please upload an image.";
    }
});

// Event listener for clicking the "browse" text
uploadText.addEventListener("click", () => {
    uploadInput.click();
});

// Event listener for selecting an image using the browse button
uploadInput.addEventListener("change", (event) => {
    const selectedFile = event.target.files[0];

    // Check if a file is selected and if it's an image
    if (selectedFile && selectedFile.type.startsWith("image/")) {
        uploadText.textContent = "Uploading...";
        handleImageUpload(selectedFile);
    } else {
        uploadText.textContent = "Invalid file type. Please upload an image.";
    }
});
// Append the upload input element to the upload box (hidden)
uploadBox.appendChild(uploadInput);
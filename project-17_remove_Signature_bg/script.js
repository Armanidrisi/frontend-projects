let imageURL;

const fileInput = document.getElementById("fileInput");
const file = document.getElementById("file");
const uploadedImage = document.getElementById("uploadedImage");
const removeBgButton = document.getElementById("removeBgButton");
const downloadButton = document.getElementById("downloadBtn");
const reloadButton = document.getElementById("reloadBtn");

// Hide the download button initially
reloadButton.style.display = "none";
downloadButton.style.display = "none";

fileInput.addEventListener("change", function (event) {
  if (event.target.files && event.target.files[0]) {
    const reader = new FileReader();

    reader.onload = function (e) {
      uploadedImage.src = e.target.result;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
});

function submitHandler() {
  removeBgButton.classList.toggle("btn_loading");
  const fileInput = document.getElementById("fileInput");
  console.log(fileInput.files);
  const image = fileInput.files[0];

  if (!fileInput.files || fileInput.files.length === 0) {
    alert("Please select an image before submitting.");
    return;
  }

  // Multipart file
  const formData = new FormData();
  formData.append("image_file", image);
  formData.append("size", "auto");

  const apiKey = "5V4yNGbdJ9Dr83u6GAbxD8Vw";

  fetch("https://api.remove.bg/v1.0/removebg", {
    method: "POST",
    headers: {
      "X-Api-Key": apiKey,
    },
    body: formData,
  })
    .then(function (response) {
      return response.blob();
    })
    .then(function (blob) {
      console.log(blob);
      const url = URL.createObjectURL(blob);
      imageURL = url;
      uploadedImage.src = url;
      reloadButton.style.display = "block";
      file.style.display = "none";

      downloadButton.style.display = "block";
      removeBgButton.style.display = "none";
    })
    .catch();
}

function downloadFile() {
  var anchorElement = document.createElement("a");
  anchorElement.href = imageURL;
  anchorElement.download = "removed_bg.png";
  document.body.appendChild(anchorElement);

  anchorElement.click();

  document.body.removeChild(anchorElement);
}

function reset() {
  window.location.reload();
}

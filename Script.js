document.addEventListener("DOMContentLoaded", function () {
  const shirtFront = document.getElementById("shirtFront");
  const shirtBack = document.getElementById("shirtBack");
  const shirt = document.getElementById("shirt");
  const showBackButton = document.getElementById("showBackButton");
  const shirtHeightInput = document.getElementById("shirtHeight");
  const shirtWidthInput = document.getElementById("shirtWidth");
  const shirtLengthInput = document.getElementById("shirtLength");

  function updateShirtDimensions() {
    const shirtHeight = shirtHeightInput.value + "px";
    const shirtWidth = shirtWidthInput.value + "px";
    const shirtLength = shirtLengthInput.value + "px";

    shirt.style.height = shirtHeight;
    shirt.style.width = shirtWidth;
    shirt.style.perspective = shirtLength;
  }

  function updateFrontDesign() {
    const frontColor = document.getElementById("frontColor").value;
    const frontQuote = document.getElementById("frontQuote").value;

    // Update front design with chosen color and quote
    shirtFront.style.backgroundColor = frontColor;
    shirtFront.innerText = frontQuote;
  }

  function updateBackDesign() {
    const backColor = document.getElementById("backColor").value;
    const backDesign = document.getElementById("backDesign").value;

    // Update back design with chosen color and design
    shirtBack.style.backgroundColor = backColor;
    // Use backDesign to add the chosen design element, e.g., an image or text
  }

  function toggleBackDesign() {
    shirtBack.classList.toggle("show-back");
  }

  // Event listeners to update designs and dimensions in real-time
  document.getElementById("frontColor").addEventListener("input", updateFrontDesign);
  document.getElementById("frontQuote").addEventListener("input", updateFrontDesign);
  document.getElementById("backColor").addEventListener("input", updateBackDesign);
  document.getElementById("backDesign").addEventListener("change", updateBackDesign);
  showBackButton.addEventListener("click", toggleBackDesign);
  shirtHeightInput.addEventListener("input", updateShirtDimensions);
  shirtWidthInput.addEventListener("input", updateShirtDimensions);
  shirtLengthInput.addEventListener("input", updateShirtDimensions);

  // Initial update of designs based on default values
  updateFrontDesign();
  updateBackDesign();
  updateShirtDimensions();
});

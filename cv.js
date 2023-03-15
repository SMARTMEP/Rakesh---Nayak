// Get all the toggle button elements
var toggleBtnEls = document.querySelectorAll(".toggle-btn");

// Add event listeners to each toggle button element
toggleBtnEls.forEach(function(toggleBtnEl) {
  toggleBtnEl.addEventListener("click", function() {
    // Get the corresponding content elements and toggle their visibility
    var contentEls = toggleBtnEl.parentNode.querySelectorAll("p, h2 ,h5,h6");
    contentEls.forEach(function(contentEl) {
      contentEl.style.display = (contentEl.style.display === "none") ? "block" : "none";
    });
  });
});

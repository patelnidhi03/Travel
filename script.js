//---dark/light mode----//
                    function myFunction() {
                       var element = document.body;
                       element.classList.toggle("dark-mode");
                    }
// Get the modal and button elements
var popup = document.getElementById("couponPopup");
var btn = document.getElementById("showCouponBtn");
var closeBtn = document.getElementById("closePopup");

// Open the popup when the button is clicked
btn.addEventListener("click", function() {
    popup.style.display = "block";
});

// Close the popup when the close button is clicked
closeBtn.addEventListener("click", function() {
    popup.style.display = "none";
});

// Close the popup when clicking outside of it
window.addEventListener("click", function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

// Close the popup when pressing the "Esc" key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        popup.style.display = "none";
    }
});




                    


    

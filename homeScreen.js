document.addEventListener("DOMContentLoaded", function () {
    // Get the envelope, gallery modal, close button, and image popup elements
    const envelopeImage = document.getElementById("envelope");
    const galleryModal = document.getElementById("gallery-modal");
    const closeGalleryButton = document.getElementById("close-gallery");
    const homescreenContainer = document.querySelector(".homescreen");

    const imagePopup = document.getElementById("image-popup");
    const popupImage = document.getElementById("popup-image");
    const popupText = document.getElementById("popup-text");
    const closePopupButton = document.getElementById("close-popup");

    // Array of descriptions for each image
    const imageDescriptions = {
        "image 1": "This is one of your favorite anime right now. I remember that this is what you are watching right now!",
        "image 2": "I love you! 💖",
        "image 3": "You really love spaghetti and I love how you love it so much.",
        "image 4": "I really do think that this color suits you and you look very pretty!",
        "image 5": "I want to give you chocolates everyday because you like and love it!",
        "image 6": "I still remember that I urged you to watch your name and you said that you were just annoyed at how things turned out.",
        "image 7": "You were so happy that time and I can still remember it to this day.",
        "image 8": "You are my baby panda.",
        "image 9": "My baby cookie! I love it because you nicknamed me after oreo so you should be a cookie.",
        "image 10": "I really love how you love things that I have given you, baby fries.",
        // Add more images and their descriptions as needed
    };

    // Open the gallery modal when the "envelopeImage" is clicked
    envelopeImage.addEventListener("click", function () {
        galleryModal.style.display = "flex"; // Show the gallery modal
    });

    // Close the gallery modal when the close button is clicked
    closeGalleryButton.addEventListener("click", function () {
        galleryModal.style.display = "none"; // Hide the gallery modal
    });

    // Close the gallery modal if clicked outside the gallery container
    window.addEventListener("click", function (event) {
        if (event.target === galleryModal) {
            galleryModal.style.display = "none"; // Close the modal if clicking outside
        }
    });

    // Open the pop-up when a gallery image is clicked
    const galleryImages = document.querySelectorAll(".gallery-image");
    galleryImages.forEach(image => {
        image.addEventListener("click", function () {
            // Get the clicked image source
            const clickedImageSrc = image.src;

            // Set the pop-up image and description
            popupImage.src = clickedImageSrc;
            popupText.textContent = imageDescriptions[image.alt] || "No description available.";

            // Add a CSS class to style the text
            popupText.classList.add("styled-popup-text");

            // Show the pop-up modal
            imagePopup.style.display = "flex";
        });
    });

    // Close the pop-up when the close button is clicked
    closePopupButton.addEventListener("click", function () {
        imagePopup.style.display = "none"; // Hide the pop-up modal
    });

    // Close the pop-up if clicked outside the popup content
    window.addEventListener("click", function (event) {
        if (event.target === imagePopup) {
            imagePopup.style.display = "none"; // Close the modal if clicking outside
        }
    });
});
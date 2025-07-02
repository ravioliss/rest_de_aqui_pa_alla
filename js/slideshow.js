// Slideshow functionality for the restaurant website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all slideshows on the page
    initializeSlideshows();
});

function initializeSlideshows() {
    // Get all slideshow containers
    const slideshowContainers = document.querySelectorAll('.slideshow-container');

    // Initialize each slideshow
    slideshowContainers.forEach((container, index) => {
        // Get all images in this container
        const images = container.querySelectorAll('img');

        // If no images, skip this container
        if (images.length === 0) return;

        // Hide all images except the first one
        for (let i = 1; i < images.length; i++) {
            images[i].style.display = 'none';
        }

        // Create navigation buttons
        const prevButton = document.createElement('button');
        prevButton.className = 'slideshow-prev';
        prevButton.innerHTML = '&#10094;'; // Left arrow
        prevButton.setAttribute('aria-label', 'Previous image');

        const nextButton = document.createElement('button');
        nextButton.className = 'slideshow-next';
        nextButton.innerHTML = '&#10095;'; // Right arrow
        nextButton.setAttribute('aria-label', 'Next image');

        // Add buttons to container
        container.appendChild(prevButton);
        container.appendChild(nextButton);

        // Set up automatic slideshow for this container
        let currentImageIndex = 0;
        let slideshowInterval;

        // Function to show a specific image
        const showImage = (index) => {
            // Hide all images
            for (let i = 0; i < images.length; i++) {
                images[i].style.display = 'none';
            }

            // Show the selected image
            images[index].style.display = 'block';
            currentImageIndex = index;
        };

        // Function to show next image
        const showNextImage = () => {
            const newIndex = (currentImageIndex + 1) % images.length;
            showImage(newIndex);
        };

        // Function to show previous image
        const showPrevImage = () => {
            const newIndex = (currentImageIndex - 1 + images.length) % images.length;
            showImage(newIndex);
        };

        // Add click event listeners to buttons
        nextButton.addEventListener('click', () => {
            showNextImage();
            // Reset the interval when manually navigating
            clearInterval(slideshowInterval);
            startSlideshow();
        });

        prevButton.addEventListener('click', () => {
            showPrevImage();
            // Reset the interval when manually navigating
            clearInterval(slideshowInterval);
            startSlideshow();
        });

        // Function to start automatic slideshow
        const startSlideshow = () => {
            slideshowInterval = setInterval(showNextImage, 3000); // 3000ms = 3 seconds
        };

        // Start the automatic slideshow
        startSlideshow();
    });
}

// Array of image URLs
const images = [
    "asset/image/motionavatar.gif",
    "asset/image/jointvit.svg",
    "asset/image/segreg.gif",
    "asset/image/bhsd.svg",
    "asset/image/diabetes.svg",
  ];
  
  // Initial index
  let currentIndex = 0;
  
  // Get the rightImage element
  const rightImage = document.getElementById('rightImage');
  
  // Function to change the background image
  function changeImage() {
    if (rightImage) {
      console.log(`Changing to image: ${images[currentIndex]}`); // Debug log
      rightImage.style.backgroundImage = `url(${images[currentIndex]})`;
      currentIndex = (currentIndex + 1) % images.length;
    } else {
      console.error("Element with id 'rightImage' not found.");
    }
  }
  
  // Set an interval to change the image every 5 seconds
  setInterval(changeImage, 5000);
  
  // Initial call to set the first image
  changeImage();
  
const texts = [
    "Believe in yourself, and you can achieve anything, Or die trying",
    "Dream big, work hard, stay focused, and surround yourself with good people.",
    "Success is not final, failure is not fatal; it is the courage to continue that counts.",
    "Your only limit is your mind—dare to go beyond it."
  ];
  
  let index = 0; // Index of the current text
  let charIndex = 0; // Index of the current character
  let isDeleting = false; // Whether the text is being erased
  
  const textElement = document.getElementById("inspiring-text");
  
  function typeEffect() {
    const currentText = texts[index];
  
    if (isDeleting) {
      // Remove one character
      charIndex--;
      textElement.textContent = currentText.substring(0, charIndex);
    } else {
      // Add one character
      charIndex++;
      textElement.textContent = currentText.substring(0, charIndex);
    }
  
    // Determine if the text should switch to deleting or typing
    if (!isDeleting && charIndex === currentText.length) {
      // Pause before deleting
      setTimeout(() => {
        isDeleting = true;
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      // Move to the next text and start typing
      isDeleting = false;
      index = (index + 1) % texts.length; // Loop back to the start
    }
  
    // Adjust the typing speed
    const speed = isDeleting ? 50 : 100;
    setTimeout(typeEffect, speed);
  }
  
  // Start the typing effect
  typeEffect();
  
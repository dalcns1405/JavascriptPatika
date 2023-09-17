function showTime() {
    // Define an array of day names
    const dayNames = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
  
    // Get the current date and time
    const currentTime = new Date();
    
    // Extract day, hours, minutes, and seconds
    const dayOfWeek = dayNames[currentTime.getDay()];
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    // Format the time and day as a string
    const timeString = `${dayOfWeek}  ${hours}:${minutes}:${seconds}`;
  
    // Display the time and day in the "myClock" element
    document.getElementById("myClock").textContent = timeString;
  }
  
  // Call the showTime() function when the HTML document is loaded
  window.onload = showTime;
  
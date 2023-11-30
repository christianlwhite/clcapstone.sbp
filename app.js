// COPYRIGHT
// Get the current year
document.addEventListener('DOMContentLoaded', function () {
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Display the current year in the footer
  const currentYearElement = document.getElementById('currentYear');
  currentYearElement.textContent = currentYear;
});

//TEXT AREA COUNTER
function updateCounter() {
  // Get the textarea and counter elements
  const textArea = document.getElementById('comments');
  const counter = document.getElementById('comments-count');

  // Get the length of the textarea value
  let length = textArea.value.length;

  // Cap the character count at 300
  if (length > 300) {
    textArea.value = textArea.value.substring(0, 300);
    length = 300;
  }

  // Update the counter with the length
  counter.textContent = length;
}

//GOOGLE MAP API
//document.getElementById("https://storage.googleapis.com/maps-solutions-4fwv6e5z9f/commutes/b80e/commutes.html").style.textAlign = "center";

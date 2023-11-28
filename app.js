// COPYRIGHT
// Get the current year
const currentYear = new Date().getFullYear();

// Get the footer element
const footer = document.getElementById('footer');

// Update the footer with the copyright notice and current year
footer.textContent = `© ${currentYear} Small Batch Productions. All rights reserved.`;
//let today = new Date();
//let year = today.getFullYear();

let el = document.getElementById('footer');
el.innerHTML = '<p>Copyright &copy;' + year + '</p>';

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
document.getElementById("https://storage.googleapis.com/maps-solutions-4fwv6e5z9f/commutes/b80e/commutes.html").style.textAlign = "center";

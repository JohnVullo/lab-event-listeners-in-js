// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const backgroundColor = document.querySelector("body")
  backgroundColor.style.backgroundColor = 'rgb(85, 253, 52)'
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  const backgroundColor = document.querySelector("body")
  backgroundColor.style.backgroundColor = ''
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressed = document.querySelector("#keyPressDisplay")
  keyPressed.textContent = "Key pressed: " + event.key
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  const userInput = document.querySelector("#textInput")
  const displayInput = document.querySelector("#textInputDisplay")

  displayInput.textContent = "You typed: " + userInput.value
 
}

// Function that displays user input for text color change to screen
function displayText(){
  const userInput = document.getElementById("textColorInput")
  const displayInputText = document.createElement("div")
  const display = document.querySelector("body")

  displayInputText.textContent = userInput.value

  display.appendChild(displayInputText)
}

// Function that changes color of each div text to a random r g b value
function changeTextColorRandom(){
  const allDivs = document.querySelectorAll("div")
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  allDivs.forEach(div => {
    div.style.color = `rgb(${r}, ${g}, ${b})`
  })
}


// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type
  document.getElementById('textInput').addEventListener('input', displayUserInput)

  // Add text to screen
  document.getElementById('inputText')?.addEventListener('click', displayText)

  // Add color change to text
  document.getElementById('colorChange')?.addEventListener('click', changeTextColorRandom)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
/*  displayText,
  changeTextColorRandom*/
}
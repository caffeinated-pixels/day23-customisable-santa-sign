const textInput = document.getElementById('text-input')
const messageDisplay = document.getElementById('message')

textInput.addEventListener('input', updateMessage)

function updateMessage(e) {
  messageDisplay.textContent = e.target.value.trim()
}

// Task:
// - Write a function to update the Santa Stop Here sign with the user's own text.

// Stretch goals
// - Add a min and max length to the message.
// - Add interchangeable emojis.
// - Allow the user to customize the colors and other styling elements, too.

function sendMessage() {
  var userInput = document.getElementById("userInput").value;
  var response = simulateResponse(userInput);
  var chatBox = document.getElementById("chatBox");
  var chatHistory = chatBox.querySelector(".card-body");
  
  var userMessage = document.createElement("p");
  userMessage.textContent = "You: " + userInput;
  chatHistory.appendChild(userMessage);
  
  var botMessage = document.createElement("p");
  botMessage.textContent = "Ollama: " + response;
  chatHistory.appendChild(botMessage);
  document.getElementById("userInput").value = "";
}

function simulateResponse(input) {
  return input;
}
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatMessages = document.getElementById("chatMessages");
  const historyList = document.getElementById("historyList");

  const question = input.value.trim();

  if (question === "") {
    alert("Please type a question first.");
    return;
  }

  const userMessage = document.createElement("p");
  userMessage.className = "user-message";
  userMessage.textContent = question;
  chatMessages.appendChild(userMessage);

  const botReply = document.createElement("p");
  botReply.className = "bot-message";
  botReply.textContent =
    "AI Demo Reply: I can explain this topic in simple steps with examples. The real AI chatbot will be connected later.";
  chatMessages.appendChild(botReply);

  if (historyList.children[0].textContent === "No history yet.") {
    historyList.innerHTML = "";
  }

  const historyItem = document.createElement("li");
  historyItem.textContent = question;
  historyList.appendChild(historyItem);

  input.value = "";
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
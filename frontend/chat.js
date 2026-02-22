function toggleChat() {
    const chatSection = document.getElementById("chatSection");

    if (chatSection.style.display === "none" || chatSection.style.display === "") {
        chatSection.style.display = "block";
    } else {
        chatSection.style.display = "none";
    }
}

async function sendMessage() {
    const input = document.getElementById("chatInput");
    const message = input.value;
    const chatBox = document.getElementById("chatBox");

    if (!message.trim()) return;

    chatBox.innerHTML += "<p><strong>You:</strong> " + message + "</p>";

    const response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message })
    });

    const data = await response.json();

    chatBox.innerHTML += "<p><strong>Bot:</strong><br>" + data.reply.replace(/\n/g, "<br>") + "</p>";

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}
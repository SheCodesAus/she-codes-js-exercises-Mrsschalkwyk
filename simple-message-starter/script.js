function showMessage() {
    let message = document.getElementById('message-text').value;


    let messageBox = document.getElementById("message-box");
    messageBox.innerText = message;
    console.log(message)
}
window.onload = function () {
    let speechBubbleElement = document.createElement("div");
    let messageBox = document.createElement("p");
    messageBox.innerText = "...";
    messageBox.id = "message-box";
    speechBubbleElement.classList.add("speech-bubble");
    speechBubbleElement.appendChild(messageBox);

    let outputElement = document.getElementById("output");
    outputElement.appendChild(speechBubbleElement);
    console.log("page has loaded");
};
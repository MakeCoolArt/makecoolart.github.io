const APP_ID = "a4af6cf1-6088-4076-9ddf-50597d583c4d"; // Replace with your real App ID
const APP_VERSION = "1.0";
const CHANNEL = "MainRoom";

// 1. Initialize the Chat Client using WSS for Render compatibility
const chatClient = new Photon.Chat.ChatClient(Photon.ConnectionProtocol.Wss, APP_ID, APP_VERSION);

// 2. Define standard Photon Chat callbacks
chatClient.onStateChange = (state) => {
    document.getElementById('status').innerText = "Status: " + Photon.Chat.ChatClient.StateToName(state);
};

chatClient.onConnected = () => {
    console.log("Connected to Photon!");
    chatClient.subscribe([CHANNEL]); // Subscribe to a channel to receive messages
};

chatClient.onGetMessages = (channelName, names, messages) => {
    const msgBox = document.getElementById('messages');
    for (let i = 0; i < messages.length; i++) {
        msgBox.innerHTML += `<p><b>${names[i]}:</b> ${messages[i]}</p>`;
    }
    msgBox.scrollTop = msgBox.scrollHeight;
};

// 3. Connection and Sending
chatClient.connectToRegionMaster("EU"); // Choose your region (e.g., "US", "EU", "JP")

function sendMessage() {
    const input = document.getElementById('chatInput');
    if (input.value) {
        chatClient.publishMessage(CHANNEL, input.value); //
        input.value = '';
    }
}

import storyGraph from './storyGraph.js';
import { visualizeStoryGraph } from './graphVisualize.js';

// TODO: Change in-memory array to actual session storage? TODO: clear session log on end of replay of story
let sessionLog = [];
let currentNode = "intro";

const videoPlayer = document.getElementById("videoPlayer");
const choiceContainer = document.getElementById("choiceContainer");
const logToggle = document.getElementById("logToggle");
const sessionLogDiv = document.getElementById("sessionLog");
const logEntries = document.getElementById("logEntries");

// Init
loadNode(currentNode);

function loadNode(nodeId) {
    const node = storyGraph[nodeId];
    
    // Update video source
    videoPlayer.src = node.videoSrc;
    videoPlayer.load();
    videoPlayer.play();
    
    // Hide choices during video playback
    choiceContainer.style.display = "none";
    
    // Video ends, show choices or ending
    videoPlayer.onended = function() {
        if (node.ending) {
            showEnding(node.ending);
        } else {
            showChoices(node.choices);
        }
    };
    
    addToSessionLog(nodeId);
}

// Show choices for the current node
function showChoices(choices) {
    choiceContainer.innerHTML = "";
    
    // Add new choice buttons
    choices.forEach(choice => {
        const button = document.createElement("button");
        button.className = "choice-btn";
        button.textContent = choice.text;
        button.addEventListener("click", () => {
            choiceContainer.style.display = "none";
            loadNode(choice.nextNode);
        });
        choiceContainer.appendChild(button);
    });
    
    choiceContainer.style.display = "flex";
}

// Show ending text
function showEnding(endingText) {
    choiceContainer.innerHTML = "";
    
    const endingDiv = document.createElement("div");
    endingDiv.style.textAlign = "center";
    endingDiv.style.padding = "20px";
    endingDiv.style.backgroundColor = "#333";
    endingDiv.style.borderRadius = "4px";
    
    const endingHeader = document.createElement("h2");
    endingHeader.textContent = "The End";
    endingDiv.appendChild(endingHeader);
    
    const endingPara = document.createElement("p");
    endingPara.textContent = endingText;
    endingDiv.appendChild(endingPara);
    
    const replayButton = document.createElement("button");
    replayButton.className = "choice-btn";
    replayButton.textContent = "Play Again";
    replayButton.addEventListener("click", () => {
        currentNode = "intro";
        loadNode(currentNode);
    });
    endingDiv.appendChild(replayButton);
    
    choiceContainer.appendChild(endingDiv);
    choiceContainer.style.display = "block";
    
    addToSessionLog("ENDING: " + endingText);
}

// Add a node to the session log
function addToSessionLog(nodeId) {
    const timestamp = new Date().toLocaleTimeString();
    let nodeName = nodeId;
    
    // Make the node name more human-readable, refactor
    if (nodeId === "intro") {
        nodeName = "Started the story";
    } else if (nodeId.startsWith("blue")) {
        nodeName = "Chose the blue path: " + nodeId.replace("blue", "");
    } else if (nodeId.startsWith("red")) {
        nodeName = "Chose the red path: " + nodeId.replace("red", "");
    }
    
    // Add to session log
    sessionLog.push({
        timestamp: timestamp,
        node: nodeName
    });
    
    updateSessionLogDisplay();
}

function updateSessionLogDisplay() {
    logEntries.innerHTML = "";
    
    sessionLog.forEach(entry => {
        const logEntry = document.createElement("div");
        logEntry.className = "log-entry";
        logEntry.innerHTML = `<strong>${entry.timestamp}</strong>: ${entry.node}`;
        logEntries.appendChild(logEntry);
    });
}

logToggle.addEventListener("click", () => {
    if (sessionLogDiv.style.display === "none" || !sessionLogDiv.style.display) {
        sessionLogDiv.style.display = "block";
        logToggle.textContent = "Hide Session Log";
    } else {
        sessionLogDiv.style.display = "none";
        logToggle.textContent = "Show Session Log";
    }
});


// TODO: This can be a json file or a simple database

export default {
    "Introduction": {
        videoSrc: "files/intro.mp4",
        choices: [
            {
                text: "Take the Blue pill",
                nextNode: "blueCamping"
            },
            {
                text: "Take the Red pill",
                nextNode: "redReading"
            }
        ]
    },
    "blueCamping": {
        videoSrc: "files/blueCamping.mp4",
        choices: [
            {
                text: "Go home",
                nextNode: "blueGoingHome"
            },
            {
                text: "Go to work",
                nextNode: "blueWorking"
            }
        ]
    },
    "redReading": {
        videoSrc: "files/redReading.mp4",
        choices: [
            {
                text: "Agent here, stay and confront",
                nextNode: "redStay"
            },
            {
                text: "Run away from agent",
                nextNode: "redRunAway"
            }
        ]
    },
    "blueGoingHome": {
        videoSrc: "files/blueGoingHome.mp4",
        choices: [
            {
                text: "Call a friend",
                nextNode: "blueHomeCall"
            },
            {
                text: "Go to sleep",
                nextNode: "blueHomeSleep"
            }
        ]
    },
    "blueWorking": {
        // Ending node with no choices
        videoSrc: "files/blueWorking.mp4",
        ending: "You lived a normal working life in the simulation."
    },
    "redStay": {
        videoSrc: "files/redStay.mp4",
        choices: [
            {
                text: "Stare down agent",
                nextNode: "redStareAgent"
            },
            {
                text: "Delete Simulation",
                nextNode: "redDeleteSimulation"
            }
        ]
    },
    "redRunAway": {
        // Ending node with no choices
        videoSrc: "files/redRunning.mp4",
        ending: "You escaped, but they will always be looking for you."
    },
    "blueHomeCall": {
        videoSrc: "files/blueHomeCall.mp4",
        ending: "You shared your strange experience with a friend, who didn't believe you."
    },
    "blueHomeSleep": {
        videoSrc: "files/blueSleeping.mp4",
        ending: "You slept soundly, forgetting everything by morning."
    },
    "redStareAgent": {
        videoSrc: "files/redStare.mp4",
        ending: "You stare down the agent. The simulation collapses. Well done."
    },
    "redDeleteSimulation": {
        videoSrc: "files/redDeleteSimulation.mp4",
        ending: "You delete the simulation from the terminal."
    }
};

// TODO: This can be a json file or a simple database

export default {
    "Introduction": {
        videoSrc: "files/intro.mp4",
        choices: [
            {
                text: "Take the Blue pill",
                nextNode: "bluePill"
            },
            {
                text: "Take the Red pill",
                nextNode: "redPill"
            }
        ]
    },
    "bluePill": {
        videoSrc: "files/blueCamping.mp4",
        choices: [
            {
                text: "Go home",
                nextNode: "blueHome"
            },
            {
                text: "Go to work",
                nextNode: "blueWork"
            }
        ]
    },
    "redPill": {
        videoSrc: "files/3.mp4",
        choices: [
            {
                text: "Stay",
                nextNode: "redStay"
            },
            {
                text: "Run",
                nextNode: "redRun"
            }
        ]
    },
    "blueHome": {
        videoSrc: "files/1.mp4",
        choices: [
            {
                text: "Call friend",
                nextNode: "blueHomeCall"
            },
            {
                text: "Go to sleep",
                nextNode: "blueHomeSleep"
            }
        ]
    },
    "blueWork": {
        videoSrc: "files/blueCamping.mp4",
        // Example of an ending node with no choices
        ending: "You lived a normal life, never knowing what could have been."
    },
    "redStay": {
        videoSrc: "files/5.mp4",
        choices: [
            {
                text: "Stare down agent",
                nextNode: "redStareAgent"
            },
            {
                text: "Delete Similation",
                nextNode: "redDelete"
            }
        ]
    },
    "redRun": {
        videoSrc: "files/4.mp4",
        ending: "You escaped, but they will always be looking for you."
    },
    "blueHomeCall": {
        videoSrc: "https://example.com/blue-home-call.mp4",
        ending: "You shared your strange experience with a friend, who thought you were crazy."
    },
    "blueHomeSleep": {
        videoSrc: "https://example.com/blue-home-sleep.mp4",
        ending: "You slept soundly, forgetting everything by morning."
    },
    "redStareAgent": {
        videoSrc: "files/6.mp4",
        ending: "You stare down the agent. The simulation collapses. Well done."
    },
    "redDelete": {
        videoSrc: "files/7.mp4",
        ending: "You delete the simulation from the terminal."
    }
};

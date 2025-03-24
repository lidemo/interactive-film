export default {
    "intro": {
        videoSrc: "files/1.mp4",
        choices: [
            {
                text: "Take the blue pill",
                nextNode: "bluePill"
            },
            {
                text: "Take the red pill",
                nextNode: "redPill"
            }
        ]
    },
    "bluePill": {
        videoSrc: "files/2.mp4",
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
                text: "Fight",
                nextNode: "redFight"
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
        videoSrc: "files/2.mp4",
        // Example of an ending node with no choices
        ending: "You lived a normal life, never knowing what could have been."
    },
    "redFight": {
        videoSrc: "files/5.mp4",
        choices: [
            {
                text: "Use weapon",
                nextNode: "redFightWeapon"
            },
            {
                text: "Hand-to-hand",
                nextNode: "redFightHands"
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
    "redFightWeapon": {
        videoSrc: "https://example.com/red-fight-weapon.mp4",
        ending: "You defeated them with the weapon, becoming a legend."
    },
    "redFightHands": {
        videoSrc: "https://example.com/red-fight-hands.mp4",
        ending: "You were outmatched, but gained their respect."
    }
};

const chapters = [
    {
        chapter: "Chapter I",
        title: "Hi, Tiffany.",
        text: "Thank you for being here."
    },

    {
        chapter: "Chapter II",
        title: "I wasn't sure if I should do this.",
        text: "But if I never did...\n\nI'd probably regret it."
    },

    {
        chapter: "Chapter III",
        title: "I don't know\nexactly\nwhen it happened.\n\nOne day...\n\nI just realized...\n\nI looked forward\nto seeing you."
    },

    {
        chapter: "Chapter IV",
        title: "You probably\nnever noticed.",
        text: "But\n\nyou became\n\npart of\n\nmy ordinary days."
    },

    {
        chapter: "Chapter V",
        title: "It wasn't\n\njust your smile.",
        text: "...\n\nOr your laugh.\n\n...\n\nOr your kindness.\n\n...\n\nIt was...\n\nyou."
    },

    {
        chapter: "",
        title: "I like you.",
        text: "And...\n\nthat's the truth."
    },

    {
        chapter: "",
        title: "Whether\n\nthis changes\n\nanything...\n\nor not...",
        text: "I'm still glad\n\nI told you."
    },

    {
        chapter: "",
        title: "Thank you...",
        text: "for reading\n\nmy heart."
    },

    {
        chapter: "",
        title: "With sincerity,",
        text: "— Jayvee\n\n\nSome feelings deserve honesty,\neven without certainty."
    }
];

let currentChapter = 0;
let isTyping = false;

const chapterEl = document.getElementById("chapter");
const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const hintEl = document.getElementById("hint");

const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const button = document.getElementById("continueBtn");

const titleText = "Hi, Tiffany.";
const subtitleText = "Thank you for being here.";

title.textContent = "";
subtitle.textContent = "";
button.style.opacity = "0";
button.style.pointerEvents = "none";

function typeText(element, text, speed, callback) {
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        } else if (callback) {
            callback();
        }
    }

    typing();
}

setTimeout(() => {

    typeText(title, titleText, 90, () => {

        setTimeout(() => {

            typeText(subtitle, subtitleText, 45, () => {

                setTimeout(() => {

                    button.style.transition = "opacity .8s";
                    button.style.opacity = "1";
                    button.style.pointerEvents = "auto";

                },600);

            });

        },500);

    });

},700);

function showChapter(index){

const page = chapters[index];

chapterEl.textContent = page.chapter;
titleEl.textContent = page.title;
subtitleEl.textContent = page.text;

}

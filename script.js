// ======================================
// PROJECT LILAC
// Story Data
// ======================================

const chapters = [

{
chapter:"Chapter I",
title:"Hi, Tiffany.",
text:"Thank you for being here."
},

{
chapter:"Chapter II",
title:"I wasn't sure if I should do this.",
text:"But if I never did...\n\nI'd probably regret it."
},

{
chapter:"Chapter III",
title:"I don't know\nexactly\nwhen it happened.",
text:"One day...\n\nI just realized...\n\nI looked forward\nto seeing you."
},

{
chapter:"Chapter IV",
title:"You probably\nnever noticed.",
text:"But...\n\nyou became\n\npart of\n\nmy ordinary days."
},

{
chapter:"Chapter V",
title:"It wasn't\n\njust your smile.",
text:"Or your laugh.\n\nOr your kindness.\n\nIt was...\n\nyou."
},

{
chapter:"",
title:"I like you.",
text:"And...\n\nthat's the truth."
},

{
chapter:"",
title:"Thank you...",
text:"for listening to mine."
},

{
chapter:"",
title:"With sincerity,",
text:"— Jayvee"
}

];

// ======================================
// Variables
// ======================================

let currentChapter = 0;
let isTyping = false;

const chapterEl = document.getElementById("chapter");
const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const hintEl = document.getElementById("hint");
const container = document.querySelector(".container");

// ======================================
// Typewriter
// ======================================

function typeWriter(element, text, speed, callback) {

    element.textContent = "";

    let i = 0;

    function type() {

        if (i < text.length) {

            element.textContent += text.charAt(i);

            i++;

            setTimeout(type, speed);

        } else {

            if (callback) callback();

        }

    }

    type();

}

// ======================================
// Show Chapter
// ======================================

function showChapter(index){

    isTyping = true;

    hintEl.classList.remove("show");

    const page = chapters[index];

    chapterEl.textContent = page.chapter;

    typeWriter(titleEl, page.title, 60, () => {

        typeWriter(subtitleEl, page.text, 30, () => {

            isTyping = false;

            hintEl.classList.add("show");

        });

    });

}

// ======================================
// Next Chapter
// ======================================

document.body.addEventListener("click", () => {

    if(isTyping) return;

    if(currentChapter >= chapters.length - 1) return;

    currentChapter++;

    showChapter(currentChapter);

});

// ======================================
// Start
// ======================================

showChapter(currentChapter);

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
let isTransitioning = false;

const chapterEl = document.getElementById("chapter");
const titleEl = document.getElementById("title");
const subtitleEl = document.getElementById("subtitle");
const hintEl = document.getElementById("hint");
const container = document.querySelector(".container");
const progressEl = document.getElementById("progress");

// ======================================
// Typewriter
// ======================================

function typeWriter(element, text, speed, callback) {

    element.classList.add("typing");
    element.textContent = "";
    
    let i = 0;

    function type() {

        if (i < text.length) {

            element.textContent += text.charAt(i);

            i++;

            setTimeout(type, speed);

        } else {

            element.classList.remove("typing");

            if (typeof callback === "function") {
    callback();
            }
            

        }

    }

    type();

}

function updateProgress(){

    let dots = "";

    for(let i = 0; i < chapters.length; i++){

        dots += (i === currentChapter) ? "● " : "○ ";

    }

    progressEl.textContent = dots;

}

// ======================================
// Show Chapter
// ======================================

function showChapter(index){

    isTyping = true;

    hintEl.classList.remove("show");

setTimeout(() => {

    titleEl.textContent = "";  
    subtitleEl.textContent = "";     
    chapterEl.textContent = "";

    const page = chapters[index];

    updateProgress();

    chapterEl.textContent = page.chapter;

    container.classList.remove("fade-in");
    container.classList.add("fade-out");

    setTimeout(() => {

        typeWriter(titleEl, page.title, 65, () => {

            const delay = page.title === "I like you." ? 1800 : 500;

            setTimeout(() => {

                typeWriter(subtitleEl, page.text, 35, () => {

                    setTimeout(() => {

                        hintEl.classList.add("show");
                        isTyping = false;

                    }, 1500);

                });

            }, delay);

        });

        container.classList.remove("fade-out");
        container.classList.add("fade-in");

    }, 500);

}



// ======================================
// Next Chapter
// ======================================

document.body.addEventListener("click", () => {

    if (isTyping || isTransitioning) return;

    if (currentChapter >= chapters.length - 1) return;

    isTransitioning = true;

    setTimeout(() => {

        currentChapter++;

        showChapter(currentChapter);

        isTransitioning = false;

    }, 450);

});
// ======================================
// Start
// ======================================

setTimeout(() => {

    showChapter(currentChapter);

}, 800);
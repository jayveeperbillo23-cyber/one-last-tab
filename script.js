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

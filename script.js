// ==================================================
// SECRET CODE
// ==================================================

const secretCode = "21092006";

const codeInputs =
    document.querySelectorAll(".code-inputs input");

const wrongCode =
    document.getElementById("wrongCode");


codeInputs.forEach((input, index) => {

    input.addEventListener("input", () => {

        input.value =
            input.value.replace(/[^0-9]/g, "");

        if (
            input.value &&
            index < codeInputs.length - 1
        ) {
            codeInputs[index + 1].focus();
        }

        checkCode();

    });


    input.addEventListener("keydown", (event) => {

        if (
            event.key === "Backspace" &&
            input.value === "" &&
            index > 0
        ) {
            codeInputs[index - 1].focus();
        }

    });

});


// ==================================================
// CHECK SECRET CODE
// ==================================================

function checkCode() {

    let enteredCode = "";

    codeInputs.forEach(input => {

        enteredCode += input.value;

    });


    if (enteredCode.length === 8) {

        if (enteredCode === secretCode) {

            wrongCode.style.display = "none";

            startWebsite();

        } else {

            wrongCode.style.display = "block";

            codeInputs.forEach(input => {
                input.value = "";
            });

            codeInputs[0].focus();

        }

    }

}


// ==================================================
// START WEBSITE
// ==================================================

function startWebsite() {

    // IMPORTANT:
    // Music does NOT start here.

    goTo("welcomePage");

}


// ==================================================
// PAGE NAVIGATION
// ==================================================

function goTo(pageId) {

    const pages =
        document.querySelectorAll(".page");


    pages.forEach(page => {

        page.classList.add("hidden");

    });


    const target =
        document.getElementById(pageId);


    if (target) {

        target.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }


    if (pageId === "finalPage") {

        startConfetti();

    }

}


// ==================================================
// BALLOON MEMORIES
// ==================================================

const memories = [

    {
        icon: "❤️",

        title: "A Beautiful Beginning",

        text:
            "Every beautiful story has a beginning. " +
            "This is one of the memories I will always " +
            "keep close to my heart."
    },


    {
        icon: "✨",

        title: "That Special Moment",

        text:
            "Some moments are small but somehow become " +
            "the biggest memories in our hearts."
    },


    {
        icon: "🌸",

        title: "A Sweet Memory",

        text:
            "Your smile has a way of making even ordinary " +
            "moments feel incredibly special."
    },


    {
        icon: "💕",

        title: "Forever Special",

        text:
            "No matter how much time passes, some memories " +
            "will always have a special place in my heart."
    },


    {
        icon: "⭐",

        title: "One More Memory",

        text:
            "Here is to all the memories we have made and " +
            "all the beautiful ones still waiting for us."
    }

];


let poppedBalloons = 0;


// ==================================================
// OPEN MEMORY
// ==================================================

function openMemory(index, balloon) {

    if (
        balloon.classList.contains("popped")
    ) {
        return;
    }


    balloon.classList.add("popped");

    balloon.parentElement.classList.add("popped");


    poppedBalloons++;


    const memory =
        memories[index];


    document.getElementById("memoryIcon")
        .innerText = memory.icon;


    document.getElementById("memoryTitle")
        .innerText = memory.title;


    document.getElementById("memoryText")
        .innerText = memory.text;


    document.getElementById("memoryPopup")
        .classList.remove("hidden");

}


// ==================================================
// CLOSE MEMORY
// ==================================================

function closeMemory() {

    document.getElementById("memoryPopup")
        .classList.add("hidden");


    if (poppedBalloons === 5) {

        document.getElementById("balloonContinue")
            .classList.remove("continue-hidden");

    }

}


// ==================================================
// LETTERS
// ==================================================

const letters = [

    {
        title: "Letter One ❤️",

        text:
            "To the one who makes my world brighter—Happy Birthday, Jithu!🫂💞 I hope this year brings you pure joy, success, and endless reasons to smile. You will always hold a truly special place in my heart. Wishing you the absolute best today and always love!"
    },


    {
        title: "Letter Two 🌷",

        text:
            "Happy Birthday, Jithu! 🎂✨you’re my favorite notification, my favorite distraction, and my absolute favorite person. Thank you for making my world so much brighter just by being in it.Wishing you the sweetest, happiest birthday ever, my love! Forever cheering for you! 🥂❤️"
    },


    {
        title: "Letter Three ✨",

        text:
            "Happy Birthday, Jithu!🫶You make my heart so full, just by being you. Thank you for all the sweet moments, the endless smiles, and the love you bring into my life every single day. I hope your birthday is as special and amazing as you are to me.Love you always 🥹❣️"
    }

];


// ==================================================
// OPEN LETTER
// ==================================================

function openLetter(index) {

    const letter =
        letters[index];


    document.getElementById("letterTitle")
        .innerText = letter.title;


    document.getElementById("letterText")
        .innerText = letter.text;


    document.getElementById("letterPopup")
        .classList.remove("hidden");

}


// ==================================================
// CLOSE LETTER
// ==================================================

function closeLetter() {

    document.getElementById("letterPopup")
        .classList.add("hidden");

}


// ==================================================
// CANDLE + MUSIC
// ==================================================

let candlesAlreadyLit = false;


// ==================================================
// LIGHT CANDLES
// ==================================================

function lightCandles() {

    if (candlesAlreadyLit) {
        return;
    }


    const music =
        document.getElementById("birthdayMusic");


    // MUSIC STARTS ONLY HERE

    music.currentTime = 0;

    music.play().then(() => {

        updateMusicButtons();

    }).catch(error => {

        console.log(
            "Music could not start:",
            error
        );

    });


    // Light candles one by one

    const candles =
        document.querySelectorAll(".candle");


    candles.forEach((candle, index) => {

        setTimeout(() => {

            candle.classList.add("lit");

        }, index * 300);

    });


    document.getElementById("wishText")
        .innerText =
        "Make a beautiful wish, jithu ❤️✨";


    document.getElementById("candleButton")
        .style.display = "none";


    setTimeout(() => {

        document.getElementById("cakeContinue")
            .classList.remove("continue-hidden");

    }, 1200);


    candlesAlreadyLit = true;

}


// ==================================================
// MUSIC PLAY / PAUSE BUTTON
// ==================================================

function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");


    if (music.paused) {

        music.play().then(() => {

            updateMusicButtons();

        }).catch(error => {

            console.log(
                "Music could not play:",
                error
            );

        });

    } else {

        music.pause();

        updateMusicButtons();

    }

}


// ==================================================
// UPDATE MUSIC BUTTON ICON
// ==================================================

function updateMusicButtons() {

    const music =
        document.getElementById("birthdayMusic");


    const buttons =
        document.querySelectorAll(".music-btn");


    buttons.forEach(button => {

        if (music.paused) {

            button.innerText = "🔇";

        } else {

            button.innerText = "🔊";

        }

    });

}


// ==================================================
// CONFETTI
// ==================================================

let confettiAnimationStarted = false;


function startConfetti() {

    if (confettiAnimationStarted) {
        return;
    }


    confettiAnimationStarted = true;


    const canvas =
        document.getElementById("confetti");


    const ctx =
        canvas.getContext("2d");


    canvas.width =
        window.innerWidth;


    canvas.height =
        window.innerHeight;


    const pieces = [];


    for (let i = 0; i < 150; i++) {

        pieces.push({

            x:
                Math.random() *
                canvas.width,

            y:
                Math.random() *
                canvas.height -
                canvas.height,

            size:
                Math.random() * 8 + 4,

            speed:
                Math.random() * 4 + 2,

            rotation:
                Math.random() * 360,

            rotationSpeed:
                Math.random() * 5

        });

    }


    function animate() {

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );


        pieces.forEach(piece => {

            piece.y += piece.speed;

            piece.rotation +=
                piece.rotationSpeed;


            if (
                piece.y >
                canvas.height
            ) {

                piece.y = -20;

                piece.x =
                    Math.random() *
                    canvas.width;

            }


            ctx.save();


            ctx.translate(
                piece.x,
                piece.y
            );


            ctx.rotate(
                piece.rotation *
                Math.PI /
                180
            );


            ctx.fillStyle =
                [
                    "#ffffff",
                    "#ffd6dd",
                    "#f3a6b5",
                    "#e8c8b9"
                ][
                    Math.floor(
                        Math.random() * 4
                    )
                ];


            ctx.fillRect(
                -piece.size / 2,
                -piece.size / 2,
                piece.size,
                piece.size
            );


            ctx.restore();

        });


        requestAnimationFrame(
            animate
        );

    }


    animate();

}


// ==================================================
// RESTART WEBSITE
// ==================================================

function restartWebsite() {

    // Stop music

    const music =
        document.getElementById("birthdayMusic");


    music.pause();

    music.currentTime = 0;


    // Reset music buttons

    document.querySelectorAll(".music-btn")
        .forEach(button => {

            button.innerText = "🎵";

        });


    // Hide all pages

    document.querySelectorAll(".page")
        .forEach(page => {

            page.classList.add("hidden");

        });


    // Show code page

    document.getElementById("codePage")
        .classList.remove("hidden");


    // Clear code

    codeInputs.forEach(input => {

        input.value = "";

    });


    // Reset balloons

    document.querySelectorAll(".balloon")
        .forEach(balloon => {

            balloon.classList.remove("popped");

        });


    document.querySelectorAll(".balloon-box")
        .forEach(box => {

            box.classList.remove("popped");

        });


    poppedBalloons = 0;


    document.getElementById("balloonContinue")
        .classList.add("continue-hidden");


    // Reset candles

    document.querySelectorAll(".candle")
        .forEach(candle => {

            candle.classList.remove("lit");

        });


    candlesAlreadyLit = false;


    document.getElementById("candleButton")
        .style.display = "inline-block";


    document.getElementById("cakeContinue")
        .classList.add("continue-hidden");


    document.getElementById("wishText")
        .innerText =
        "Click the button to light the candles ✨";


    window.scrollTo(0, 0);


    codeInputs[0].focus();

}
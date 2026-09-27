const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let width;
let height;

let fontSize = 16;
let columns;
let drops;

const characters =
    "アァカサタナハマヤラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function resizeCanvas() {

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    columns = Math.floor(width / fontSize);

    drops = [];

    for (let i = 0; i < columns; i++) {

        drops[i] =
            Math.random() * -100;

    }

}


function drawMatrix() {

    ctx.fillStyle =
        "rgba(0, 0, 0, 0.08)";

    ctx.fillRect(
        0,
        0,
        width,
        height
    );

    ctx.font =
        fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const character =
            characters[
                Math.floor(
                    Math.random() *
                    characters.length
                )
            ];

        ctx.fillStyle =
            "#66ff66";

        ctx.fillText(
            character,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize > height &&
            Math.random() > 0.975
        ) {

            drops[i] = 0;

        }

        drops[i]++;

    }

}


window.addEventListener(
    "resize",
    resizeCanvas
);


resizeCanvas();

setInterval(
    drawMatrix,
    35
);

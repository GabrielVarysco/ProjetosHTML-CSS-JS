const typedTextSpan = document.querySelector(".texto");
const escritaSpan = document.querySelector(".escrita");

const textArray = ["programando", "comendo", "jogando", "dormindo"];

const typingDelay = 150; // Tempo de digitação
const newTextDelay = 1500; // Tempo de espera para apagar
const erasingDelay = 100; // Tempo de apagar

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!escritaSpan.classList.contains("digitando")) escritaSpan.classList.add("digitando");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        escritaSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!escritaSpan.classList.contains("digitando")) escritaSpan.classList.add("digitando");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        escritaSpan.classList.remove("digitando");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load inicia o efeito de escrevendo
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});
            
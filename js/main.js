let keySequence = [];
let lastKeyTime = Date.now();

document.addEventListener('keydown', event => {
    const key = event.key.toLowerCase();
    const charList = 'cerst';

    if (charList.indexOf(key) === -1) return;

    const currentTime = Date.now();

    if (currentTime - lastKeyTime > 750) {
        keySequence = [];
    }

    keySequence.push(key);
    lastKeyTime = currentTime;
    if (keySequence.toString() === "s,e,c,r,e,t") { return window.location.href = "./novel.html" }
});
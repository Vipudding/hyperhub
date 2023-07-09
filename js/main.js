// initiate the library
function typeChangerInit (texts = []) {
    texts.forEach(text => {
        const letters = text.textContent.split('');
        text.textContent = '';
        letters.forEach(letter => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.classList.add('typechanger__letter');
            text.appendChild(span);
        });
    });

    window.setTimeout(() => {
        typeChangerChange(texts);
    }, 500);
}

// Animate changing fonts
function typeChangerChange (texts) {
    texts.forEach(text => {
        const letters = text.querySelectorAll('.typechanger__letter');
        const time = 1700 / (letters.length);
        letters.forEach((letter, index) => {
            setTimeout(() => {
                letter.classList.add('typechanger__letter--changed');
            }, time * index);
        });
    });
}

// Creates a font family changes after breaking each letter in a separate span
function typeChanger () {
    const texts  = document.querySelectorAll('.typechanger');
    typeChangerInit(texts);
}

typeChanger();
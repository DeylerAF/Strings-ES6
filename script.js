/* *1. Escribir un programa que pida al usuario que introduzca una frase en la consola y una vocal, y después muestre por pantalla la misma frase pero con la vocal introducida en mayúscula. */

const CAPITALIZE_WORDS = () => {
    let str = prompt("Please enter your name:")
    const NAME = str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    const GREETING = document.createElement('h1');
    GREETING.textContent = `Hello, ${NAME}. I hope you're having a great day!`;
    document.body.appendChild(GREETING);
};
CAPITALIZE_WORDS();

const VALIDATE_VOWEL = () => {
    const INPUT = prompt('Please enter a vowel:');
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];

    if (VOWELS.includes(INPUT.toLowerCase())) {
        const VOWEL = document.createElement('h1');
        VOWEL.textContent = `You have entered the vowel ${INPUT.toUpperCase()}.`;
        document.body.appendChild(VOWEL);
    } else {
        alert('Please enter a vowel.');
        VALIDATE_VOWEL();
    }
};
VALIDATE_VOWEL();

/* *2.Escribir un programa que pregunte por consola el precio de un producto en colones con dos decimales y muestre por pantalla el número de colones y el número de decimales del precio introducido. */

const VALIDATE_PRICE = () => {
    let price = prompt("Please enter the price of the product:");
    let priceFloat = parseFloat(price).toFixed(2);

    if (isNaN(priceFloat)) {
        alert('Please enter a valid price');
        VALIDATE_PRICE();
    } else {
        const PRICE_IN_COLONES = document.createElement('h1');
        PRICE_IN_COLONES.textContent = `The price of the product is: ₡${priceFloat} colones.`;
        document.body.appendChild(PRICE_IN_COLONES);
    }
};
VALIDATE_PRICE();

/* *3.Escribir un programa que pida al usuario que introduzca una frase en la consola y muestre por pantalla la frase invertida. */

const IS_PALINDROME = () => {
    let str = prompt('Please enter a phrase:');
    str = str.replace(/\s/g, '')
    const INPUT = str.toLowerCase()
    const SPLITTED = INPUT.split('')
    const REVERSED = SPLITTED.reverse()
    const JOINED = REVERSED.join('')
    if (INPUT == JOINED) {
        const PHRASE = document.createElement('h1');
        PHRASE.textContent = `${INPUT} reversed is ${JOINED} and is a palindrome.`;
        document.body.appendChild(PHRASE);
    } else {
        const PHRASE = document.createElement('h1');
        PHRASE.textContent = `${INPUT} reversed is ${JOINED} and is not a palindrome.`;
        document.body.appendChild(PHRASE);
    }
};
IS_PALINDROME();

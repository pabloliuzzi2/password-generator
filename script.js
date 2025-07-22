const passwordEl = document.getElementById('password');
const copyEl = document.getElementById('copy');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+=-';

function generatePassword() {
    const length = lengthEl.value;
    let characters = '';
    let password = '';

    if (uppercaseEl.checked) {
        characters += uppercaseLetters;
    }
    if (lowercaseEl.checked) {
        characters += lowercaseLetters;
    }
    if (numbersEl.checked) {
        characters += numbers;
    }
    if (symbolsEl.checked) {
        characters += symbols;
    }

    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordEl.value = password;
}

copyEl.addEventListener('click', () => {
    passwordEl.select();
    document.execCommand('copy');
    alert('Password copied to clipboard');
});

generateEl.addEventListener('click', generatePassword);

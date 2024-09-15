let passwordLength = 8;
const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const passwordDisplay = document.getElementById('password');
const uppercaseCheckbox = document.getElementById('uppercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('genBtn');

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*()_+{}:"<>?|[];,./`~';

lengthSlider.addEventListener('input', (event) => {
    passwordLength = +event.target.value;
    lengthValue.innerText = passwordLength;
});

function generatePassword() {
    let characters = lowercaseChars; // Default is lowercase
    if (uppercaseCheckbox.checked) characters += uppercaseChars;
    if (numbersCheckbox.checked) characters += numberChars;
    if (symbolsCheckbox.checked) characters += symbolChars;

    if (characters.length === 0) return 'Select options!';

    let password = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}
generateButton.addEventListener('click', () => {
    const newPassword = generatePassword();
    passwordDisplay.innerText = newPassword;
});
passwordDisplay.addEventListener('click', () => {
    const passwordText = passwordDisplay.innerText;
    
    if (passwordText !== "") {
        navigator.clipboard.writeText(passwordText).then(() => {
            alert('Password copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy password:', err);
        });
    }
});
const passwordDiv = document.getElementById("password");

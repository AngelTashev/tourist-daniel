const message = '';
const nameField = document.getElementById('name-input');
const ageField = document.getElementById('age-input');
const sendButton = document.getElementById('send-button');
const resultField = document.getElementById('feedback-result');

function setEventListeners() {
    sendButton.addEventListener('click', (e) => {
        e.preventDefault();
        let name = validateAndReturnName(nameField.value);
        let age = validateAndReturnAge(ageField.value);
        if (!name || !age) {
            return;
        }
        let discount = generateDiscount(age);
        displayText(name, discount);
    });
}

function displayText(name, discount) {
    resultField.innerHTML = `${name}, вие получавате ${discount}% отстъпка за курс по избор`;
}

function validateAndReturnName(name) {
    name = name.trim();
    if (name.length < 3) {
        alert('Моля въведете валидно име от поне 3 символа!');
        return false;
    }
    return name.charAt(0).toUpperCase() + name.slice(1);;
}

function validateAndReturnAge(age) {
    age = age.trim();
    try {
        let num = Number(age);
        if (num < 14 || num > 100 || !num) {
            throw new Error('Invalid years');
        }
    } catch (err) {
        alert('Моля въведете валидно число в полето за години! (от 8 до 80)');
        return false;
    }

    return parseInt(age);
}

function generateDiscount(age) {
    if (age < 18) {
        return 1;
    } else if (age >= 18 && age < 30) {
        return 2;
    } else if (age >= 30 && age < 40) {
        return 3;
    } else if (age >= 40 && age < 50) {
        return 4;
    } else if (age >= 50 && age < 60) {
        return 5;
    } else {
        return 6;
    }
}

setEventListeners();
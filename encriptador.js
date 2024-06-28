document.getElementById('encryptBtn').addEventListener('click', validateAndEncryptText);
document.getElementById('decryptBtn').addEventListener('click', validateAndDecryptText);
document.getElementById('copyBtn').addEventListener('click', copyText);

function validateAndEncryptText() {
    const inputText = document.getElementById('inputText').value;
    if (isValidInput(inputText)) {
        encryptText(inputText);
    } else {
        alert('El texto debe estar en minúsculas y no contener acentos ni caracteres especiales.');
    }
}

function validateAndDecryptText() {
    const inputText = document.getElementById('inputText').value;
    if (isValidInput(inputText)) {
        decryptText(inputText);
    } else {
        alert('El texto debe estar en minúsculas y no contener acentos ni caracteres especiales.');
    }
}

function isValidInput(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function encryptText(inputText) {
    let encryptedText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('outputText').value = encryptedText;
}

function decryptText(inputText) {
    let decryptedText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('outputText').value = decryptedText;
}

function copyText() {
    const outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); 
    document.execCommand('copy');
}

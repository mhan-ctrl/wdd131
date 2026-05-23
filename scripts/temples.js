const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified")
currentyear.textContent = new Date().getFullYear()
lastmodified.textContent = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});
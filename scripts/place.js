const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified")
currentyear.textContent = new Date().getFullYear()
lastmodified.textContent = `Last Modified: ${document.lastModified}`;

//The next course will cover how to use third-party APIs to get real-time weather data
const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastmodified")
currentyear.textContent = new Date().getFullYear()
lastmodified.textContent = `Last Modified: ${document.lastModified}`;

document.querySelectorAll('img[loading="lazy"]').forEach(async (img) => {
    try {
        await img.decode();
        img.classList.add('loaded');
    } catch {
        img.classList.add('loaded');
    }
});
// For random psychopomp display
const image = document.querySelector("#psychopomp-image");
const culture = document.querySelector("#psychopomp-culture");
const name = document.querySelector("#psychopomp-name");
const summary = document.querySelector("#psychopomp-summary");
const domains = document.querySelector("#psychopomp-domains");
const symbols = document.querySelector("#psychopomp-symbols");
const description = document.querySelector("#psychopomp-description");
const randomButton = document.querySelector("#random-btn");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

let currentPsychopomp;

if (id) {
    currentPsychopomp = psychopomps.find(
        psychopomp => psychopomp.id === id
    );
}
if (!currentPsychopomp) {
    currentPsychopomp = getRandomPsychopomp();
}

displayPsychopomp(currentPsychopomp);

randomButton.addEventListener("click", () => {
    displayPsychopomp(getRandomPsychopomp());
});

function getRandomPsychopomp() {
    const randomIndex = Math.floor(Math.random() * psychopomps.length);

    return psychopomps[randomIndex];
}

function displayPsychopomp(psychopomp) {
    image.src = psychopomp.image;
    image.alt = psychopomp.name;

    culture.textContent = psychopomp.culture;
    name.textContent = psychopomp.name;
    summary.textContent = psychopomp.summary;
    description.textContent = psychopomp.description;

    domains.innerHTML = "";
    symbols.innerHTML = "";

    psychopomp.domains.forEach(domain => {
        const li = document.createElement("li");
        li.textContent = domain;
        domains.appendChild(li);
    });

    psychopomp.symbols.forEach(symbol => {
        const li = document.createElement("li");
        li.textContent = symbol;
        symbols.appendChild(li);
    });
}
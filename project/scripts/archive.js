// for the entire array of psychopomps
const grid = document.querySelector("#psychopomp-grid");

displayPsychopomps(psychopomps);

function displayPsychopomps(psychopompList) {
    psychopompList.forEach(psychopomp => {
        const card = document.createElement("article");
        card.classList.add("psychopomp-card");

        card.innerHTML = `<img src="${psychopomp.image}" alt="${psychopomp.name}" loading="lazy">
            <div class="card-content">
                <h3>${psychopomp.name}</h3>
                <p class="culture">${psychopomp.culture}</p>
                <p>${psychopomp.summary}</p>
                <a href="index.html?id=${psychopomp.id}">
                    Learn More
                </a>
            </div>`;
        grid.appendChild(card);
    });
}
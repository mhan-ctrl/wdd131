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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Oakland California",
        location: "Oakland, California",
        dedicated: "1964, November, 19",
        area: 80157,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oakland-california/800x500/01-Oakland-Temple-Exterior-2236889.jpg"
    },
    {
        templeName: "Portland Oregon",
        location: "Lake Oswego, Oregon",
        dedicated: "1989, August, 21",
        area: 80500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/800x500/portland-temple-lds-1079112-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 12",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/800x500/5-Rome-Temple-2160345.jpg"
    }
    //add more temple objects here
];

createTempleCard(temples);

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    createTempleCard(temples);
})

const oldButton = document.querySelector('#old')
oldButton.addEventListener('click', () => {
    const oldTemples = temples.filter((temple) => {
        const year = Number(temple.dedicated.slice(0, 4));
        return year <= 1900;
    })
    createTempleCard(oldTemples);
})

const newButton = document.querySelector('#new')
newButton.addEventListener('click', () => {
    const newTemples = temples.filter((temple) => {
        const year = Number(temple.dedicated.slice(0, 4));
        return year >= 2000;
    })
    createTempleCard(newTemples);
})

const largeButton = document.querySelector('#large')
largeButton.addEventListener('click', () => {
    const largeTemples = temples.filter(temple => temple.area >= 90000)
    createTempleCard(largeTemples);
})

const smallButton = document.querySelector('#small')
smallButton.addEventListener('click', () => {
    const smallTemples = temples.filter(temple => temple.area <= 10000)
    createTempleCard(smallTemples)
})

function createTempleCard(filteredtemples) {
    document.querySelector(".gallery").innerHTML = "";
    filteredtemples.forEach(temple => {
        let card = document.createElement("section");
        card.classList.add("card");
        let name = document.createElement("h3")
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedication:</span> ${temple.dedicated}`
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".gallery").appendChild(card);
    })
}
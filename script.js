//your JS code here. If required.
const bands = [
    "The Rolling Stones",
    "A Perfect Circle",
    "The Beatles",
    "An Endless Sporadic",
    "Led Zeppelin"
];

function strip(bandName) {
    return bandName.replace(/^(a |an |the )/i, '').trim();
}

bands.sort((a, b) => strip(a).localeCompare(strip(b)));

function displayBands() {
    const ul = document.getElementById('band');
    ul.innerHTML = '';

    bands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        ul.appendChild(li);
    });
}

displayBands();

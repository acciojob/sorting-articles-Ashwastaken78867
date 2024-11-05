const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

bands.sort((a, b) => {
    const bandA = a.replace(/^(a |an |the )/i, '').trim();
    const bandB = b.replace(/^(a |an |the )/i, '').trim();
    return bandA.localeCompare(bandB);
});

document.getElementById('bands').innerHTML = bands.map(band => `<li>${band}</li>`).join('');

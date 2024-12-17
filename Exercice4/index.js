document.getElementById('myButton').addEventListener('click', () => {
    // Remplacez l'alerte par l'ajout du texte dans un paragraphe
    const alertParagraph = document.createElement('p');
    alertParagraph.textContent = 'Bonjour, vous avez cliqué sur le bouton !';
    document.body.appendChild(alertParagraph);
});

// Ajoutez dynamiquement un élément <p> au DOM
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Ceci est un paragraphe ajouté dynamiquement.';
document.body.appendChild(newParagraph);

setTimeout(() => {
    const pElement = document.querySelector('p');
    if (!pElement) {
        console.warn('Expected to find element: `p`, but never found it.');
        return; // Exit the function if the element is not found
    }
}, 4000);




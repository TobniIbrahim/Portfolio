const projectButtons = document.querySelectorAll('.project-button');

projectButtons.forEach(button => {
    button.addEventListener('click', function() {
        const imageSrc = 'chemin/vers/ton/image.jpg';
        const linkUrl = 'lien-vers-ton-site';

        const image = document.createElement('img');
        image.src = imageSrc;

        const link = document.createElement('a');
        link.href = linkUrl;
        link.textContent = 'Voir le projet'; 

        
        this.parentNode.appendChild(image);
        this.parentNode.appendChild(link);

        
        this.disabled = true;
    });
});

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Veuillez remplir tous les champs du formulaire.');
    } else {
        alert('Formulaire envoyé avec succès!');
        form.reset(); 
    }
});


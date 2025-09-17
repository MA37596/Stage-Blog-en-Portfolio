document.addEventListener('DOMContentLoaded', function() {
    // Haal alle elementen op
    const searchInput = document.querySelector('.search-filter input');
    const categorySelect = document.querySelector('.search-filter select');
    const gameCards = document.querySelectorAll('.game-card');

    // Functie om spellen te filteren
    function filterGames() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categorySelect.value;

        gameCards.forEach(card => {
            const gameName = card.querySelector('h3').textContent.toLowerCase();
            const gameDescription = card.querySelector('p').textContent.toLowerCase();
            const gameCategory = card.getAttribute('data-category');

            // Check of het spel voldoet aan de zoekterm en categorie
            const matchesSearch = gameName.includes(searchTerm) || gameDescription.includes(searchTerm);
            const matchesCategory = !selectedCategory || gameCategory === selectedCategory;

            // Toon of verberg het spel op basis van de filters
            if (matchesSearch && matchesCategory) {
                card.style.display = 'block';
                // Voeg een kleine vertraging toe voor een vloeiende animatie
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 50);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });

        // Toon een bericht als er geen spellen gevonden zijn
        const visibleGames = Array.from(gameCards).filter(card => card.style.display !== 'none');
        const noResultsMessage = document.querySelector('.no-results-message');
        
        if (visibleGames.length === 0) {
            if (!noResultsMessage) {
                const message = document.createElement('div');
                message.className = 'no-results-message';
                message.innerHTML = `
                    <h3>Geen spellen gevonden</h3>
                    <p>Probeer een andere zoekterm of categorie</p>
                `;
                document.querySelector('.games-container').appendChild(message);
            }
        } else if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }

    // Event listeners voor zoeken en filteren
    searchInput.addEventListener('input', filterGames);
    categorySelect.addEventListener('change', filterGames);

    // Voeg hover effecten toe aan de spelkaarten
    gameCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Voeg click event toe aan de "Speel Nu" knoppen
    const playButtons = document.querySelectorAll('.play-button');
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const gameCard = this.closest('.game-card');
            const gameName = gameCard.querySelector('h3').textContent;
            alert(`Je hebt gekozen voor ${gameName}!`);
            // Hier kun je de gebruiker naar het daadwerkelijke spel leiden
        });
    });
});

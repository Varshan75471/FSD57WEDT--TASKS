const fetchPokemon = () => {
    const pokemonName = document.getElementById('pokemonInput').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Pokémon not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('pokemonName').innerText = data.name.charAt(0).toUpperCase() + data.name.slice(1);
            document.getElementById('pokemonHeight').innerText = `Height: ${data.height / 10} m`;
            document.getElementById('pokemonWeight').innerText = `Weight: ${data.weight / 10} kg`;

            // Display types
            const types = data.types.map(typeInfo => typeInfo.type.name).join(', ');
            document.getElementById('pokemonTypes').innerText = `Types: ${types}`;
            
            // Set Pokémon image
            document.getElementById('pokemonImage').src = data.sprites.front_default;
        })
        .catch(err => {
            document.getElementById('pokemonInfo').style.display = 'none';
            alert(err.message);
            console.error('Error fetching Pokémon:', err);
        });
};

// Hide Pokémon info by default
document.getElementById('pokemonInfo').style.display = 'none';

// Show Pokémon info if it exists
document.getElementById('pokemonInput').addEventListener('input', () => {
    document.getElementById('pokemonInfo').style.display = 'block';
});

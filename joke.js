const fetchJoke = () => {
    const url = 'https://v2.jokeapi.dev/joke/Programming';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const jokeElement = document.getElementById('joke');
            if (data.type === 'single') {
                jokeElement.innerHTML = `<p>${data.joke}</p>`;
            } else {
                jokeElement.innerHTML = `<p>${data.setup}</p><p>${data.delivery}</p>`;
            }
        })
        .catch(err => {
            document.getElementById('joke').innerHTML = `<p>Error fetching joke.</p>`;
            console.error('Error fetching joke:', err);
        });
};

// Call the function on page load
window.onload = fetchJoke;

const fetchCatImage = () => {
    const url = 'https://api.thecatapi.com/v1/images/search';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const catImage = data[0].url; // Get the URL of the cat image
            document.getElementById('catImage').src = catImage;
        })
        .catch(err => {
            console.error('Error fetching cat image:', err);
            alert('Error fetching cat image. Please try again.');
        });
};

// Fetch a cat image on page load
window.onload = fetchCatImage;

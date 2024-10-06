const fetchAPOD = () => {
    const apiKey = 'Y5l7PcS0zVSWA4bbWoxL9Xo6HbJrLHV996poIXcm'; // Replace with your NASA API key
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('apod-image').src = data.url;
            document.getElementById('title').innerText = data.title;
            document.getElementById('explanation').innerText = data.explanation;
        })
        .catch(err => {
            document.getElementById('title').innerText = 'Error fetching APOD';
            document.getElementById('explanation').innerText = err.message;
            console.error('Error fetching APOD:', err);
        });
};

// Call the function to fetch APOD on page load
window.onload = fetchAPOD;

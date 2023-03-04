const photosDiv = document.getElementById('photos');
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=200')
    .then(response => response.json())
    .then(photos => {
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.thumbnailUrl;
        photosDiv.appendChild(img);
    });
})
    .catch(error => {
    console.error(error);
});
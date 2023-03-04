const photosDiv = document.getElementById('photos');
let count = 0
window.onload = function data(){
    fetch('https://jsonplaceholder.typicode.com/photos?_page=${count}'
)
.
then(response => response.json())
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

document.querySelector('.prev').addEventListener('click', () => {
    count--;
    if (count < 0) {
        count = 0;
    }
    data()

});

document.querySelector('.next').addEventListener('click', () => {
    count++;
    data()
})}
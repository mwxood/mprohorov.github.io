function setImage() {
    const imageHolder = document.querySelector('.header-image-holder');
    const url = 'https://robohash.org/set_set';
    const image = document.createElement('img');
    image.src = url + Math.round(Math.random() * 10);
    imageHolder.append(image);
}

function getDate() {
    const date = new Date();
    const dateElement = document.querySelector('.date');
    dateElement.innerHTML = date.getFullYear();
}

setImage();
getDate();
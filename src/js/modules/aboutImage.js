const aboutImage = () => {
    const url = 'https://robohash.org/set_set';
    const imageHolder = document.querySelector('.image-holder');
    const image = document.createElement ('img');
    image.src = url + Math.round (Math.random () * 10);
    imageHolder.append (image);
};

export default aboutImage;
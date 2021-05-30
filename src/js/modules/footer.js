const footer = () => {
    const date = new Date ();
    const dateElement = document.querySelector ('.date');
    dateElement.innerHTML = date.getFullYear ();
};

export default footer;
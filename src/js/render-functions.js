
export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = ''; // Очищаємо галерею перед додаванням нових зображень
    images.forEach(image => {
        const imageElement = document.createElement('img');
        imageElement.src = image.webformatURL;
        imageElement.alt = image.tags;
        gallery.appendChild(imageElement);
    });
}

export function showMessage(message, type = 'error') {
    iziToast[type]({
        title: '',
        message: message,
        position: 'topRight'
    });
}
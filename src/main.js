
searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (!searchTerm) {
        showMessage('Please enter a search term');
        return;
    }
    loader.classList.add('show'); // Показуємо індикатор завантаження
    try {
        const images = await fetchImages(searchTerm);
        if (images.length === 0) {
            showMessage('Sorry, there are no images matching your search query. Please try again!');
        } else {
            renderImages(images);
        }
    } catch (error) {
        showMessage('Failed to fetch images. Please try again later.');
    } finally {
        loader.classList.remove('show'); // Ховаємо індикатор завантаження навіть у випадку помилки
    }
});
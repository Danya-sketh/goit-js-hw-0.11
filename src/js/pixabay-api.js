const API_KEY = '43113901-6bef41cb21468ce176a9fbb77'; // Встановіть ваш унікальний ключ доступу до API тут

export async function fetchImages(searchQuery) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        return data.hits;
    } catch (error) {
        console.error('Error fetching images:', error);
        throw error;
    }
}

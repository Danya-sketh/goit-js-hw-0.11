






import axios from 'axios';

export async function getImages(searchQuery, currentPage) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = {
    key: '43113901-6bef41cb21468ce176a9fbb77',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: currentPage,
  };

  const res = await axios.get(BASE_URL, { params });
  return res.data;
}




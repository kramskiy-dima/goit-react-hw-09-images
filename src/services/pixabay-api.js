import axios from 'axios';

const key = '20677426-5a1c43fc209aed266a44605e2';

const fetchImg = (searchQuery = '', currentPage = 1) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(response => response.data.hits);
};

export default { fetchImg };

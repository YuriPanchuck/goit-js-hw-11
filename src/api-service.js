import axios from 'axios';

async function getData(data, page) {
  const apiData = await axios.get(
    `https://pixabay.com/api/?key=31282905-4d60ee9f90c8b2f8940926d57&q=${data}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`
  );                              
  return apiData;
}

export default { getData };
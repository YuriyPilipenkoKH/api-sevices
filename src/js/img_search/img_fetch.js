import axios from "axios";

const API_KEY = '34491623-5c4ef369d6c59f62bc483440c';
const BASE_URL = 'https://pixabay.com/api';

export  async function fetchCard(query,page,perPage) {
    try {
        const params = new URLSearchParams({
            key: API_KEY,  
            q: query,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true,
            page: page,
            per_page: perPage,
        });

      const response = await axios.get(`${BASE_URL}/?${params}`);
      console.log(response.data);
     
      return response.data
    } catch (error) {
        console.error(error);
        throw Error(response.statusText)
      
    }
}


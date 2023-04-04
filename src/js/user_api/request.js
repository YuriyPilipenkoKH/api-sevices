import axios from "axios";


export default function usersRequest()   {
    const BASE_URL = 'https://randomuser.me/api/'

    return  axios.get(BASE_URL)
    .then(response => {
       

        return response.data.results[0]
    })
  
}
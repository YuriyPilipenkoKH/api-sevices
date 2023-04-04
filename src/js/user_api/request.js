import axios from "axios";


export default function usersRequest()   {
    const BASE_URL = 'https://randomuser.me/'

    const response =   axios.get(BASE_URL)

}
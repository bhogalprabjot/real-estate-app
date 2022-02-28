import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'
// headers: {
//     'x-rapidapi-host': 'bayut.p.rapidapi.com',
//     'x-rapidapi-key': 'aa58632f37msh2629bc914cd638cp17dd93jsndef68a51d45f'
//   }

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'aa58632f37msh2629bc914cd638cp17dd93jsndef68a51d45f'
        }
    });
    return data;
}
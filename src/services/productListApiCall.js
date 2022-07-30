import axios from 'axios';
export const getProductsList = () => {
  return axios.get(`https://meijerdigital.azurewebsites.net/api/interview`);
}
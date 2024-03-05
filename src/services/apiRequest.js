import axios from 'axios';
import { BASE_URL } from 'constants/config';

const apiRequest = axios.create({
  baseURL: BASE_URL
});

export default apiRequest;
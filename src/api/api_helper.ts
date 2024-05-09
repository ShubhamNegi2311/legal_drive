import axios from 'axios';
import {BASE_URL} from 'utils/constants';

const apiConfig = {
  baseURL: BASE_URL,
  timeout: 60000,
  refresh: false,
  headers: {
    accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

export const axiosInstance = axios.create(apiConfig);

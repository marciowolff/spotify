import axios from 'axios';
import auth from './auth';

export const responseInterceptor = error => {
  if (error.response && error.response.status === 401) {
    auth.removeToken();
  }

  return error.response
    ? Promise.resolve(error.response)
    : Promise.reject(error);
};

export const requestInterceptor = config => {
  const token = auth.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
};

export const createClient = (baseURL = '', requester = axios) => {
  const client = requester.create({ baseURL });

  client.interceptors.request.use(requestInterceptor);
  client.interceptors.response.use(null, responseInterceptor);
  return client;
};

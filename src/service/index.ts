import axios from 'axios';
import { IUser } from '../screen/User/@types';

const baseUrl = 'https://reqres.in/api/'

export const axiosApi = axios.create({
    baseURL: baseUrl
});

export const useGetUser = async () => {
  const response = await axiosApi.get('/users');
  return response.data.data;
}

export const useSearchUser = async (id: string) => {
  const response = await axiosApi.get(`/users/${id}`);
  return response.data.data;
}

export const useCreateUser = async ({ first_name, last_name } : IUser) => {
  const response = await axiosApi.post('/users', {first_name, last_name});
  return response.data.data;
}

export const useUpdateUser = async ({ first_name, last_name} : IUser) => {
  const response = await axiosApi.put('/users', { first_name, last_name});
  return response.data.data;
}

export const useDeleteUser = async ({ id } : IUser) => {
  const response = await axiosApi.delete(`/users/${id}`);
  return response.data.data;
}

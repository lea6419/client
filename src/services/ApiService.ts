import axios from 'axios';
import { User } from '../mpdels/models';

const API_URL = 'https://localhost:7234/api/User';

const ApiService = {
  login: (email: string, password: string) => {
    return axios.post(`${API_URL}/login`, { email, password });
  },
  register: (fullName: string, email: string, password: string, role: string) => {
    return axios.post(`${API_URL}/register`, { fullName, email, password, role });
  },
  getUsers: () => {
    const token = localStorage.getItem('token');
    return axios.get<User[]>(`${API_URL}`, { headers: { Authorization: `Bearer ${token}` } });
  },
  updateUser: (userId: number, user: User) => {
    const token = localStorage.getItem('token');
    return axios.put<User>(`${API_URL}/${userId}`, user, { headers: { Authorization: `Bearer ${token}` } });
  },
  deleteUser: (userId: number) => {
    const token = localStorage.getItem('token');
    return axios.delete(`${API_URL}/${userId}`, { headers: { Authorization: `Bearer ${token}` } });
  },
};

export default ApiService;
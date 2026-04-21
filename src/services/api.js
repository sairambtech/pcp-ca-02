import axios from 'axios';

const BASE_URL = 'https://t4e-testserver.onrender.com/api';

export const fetchToken = async () => {
  const response = await axios.post(`${BASE_URL}/public/token`, {
    studentId: 'E0423020',
    password: '447897',
  });

  return response.data.token;
};

export const fetchOrders = async (token) => {
  const response = await axios.get(`${BASE_URL}/private/data`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

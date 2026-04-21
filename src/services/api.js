import axios from 'axios';

const BASE_URL = 'https://t4e-testserver.onrender.com/api';

export const fetchToken = async () => {
  const response = await axios.post(`${BASE_URL}/public/token`, {
    studentId: 'E0423020',
    set: 'setA',
    password: '447897',
  });

  console.log('TOKEN RESPONSE:', response.data);
  return response.data;
};

export const fetchOrders = async (token, dataUrl) => {
  const response = await axios.get(`${BASE_URL}${dataUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  console.log('ORDERS RESPONSE:', response.data);
  return response.data;
};

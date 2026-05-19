import axios from 'axios';

const API_URL =
'https://gigflow-dashboard-zt8h.onrender.com/api/leads';

export const getLeads = async (
  page = 1
) => {
  const response = await axios.get(
    `${API_URL}?page=${page}`
  );

  return response.data;
};

export const createLead = async (
  leadData: any
) => {
  const response = await axios.post(
    API_URL,
    leadData
  );

  return response.data;
};

export const deleteLead = async (
  id: string
) => {
  const token =
    localStorage.getItem('token');

  const response = await axios.delete(
    `${API_URL}/${id}`,
    {
      headers: {
        authorization: token || '',
      },
    }
  );

  return response.data;
};
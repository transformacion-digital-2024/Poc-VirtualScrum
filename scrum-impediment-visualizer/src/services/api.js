import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Reemplaza con la URL de tu API

export async function getImpediments(filters) {
  const response = await axios.get(`${API_BASE_URL}/impediments`, { params: filters });
  return response.data;
}

export async function updateImpedimentStatus(id, status) {
  const response = await axios.patch(`${API_BASE_URL}/impediments/${id}`, { status });
  return response.data;
}

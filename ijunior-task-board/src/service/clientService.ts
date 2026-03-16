import { api } from './api';
import type { Client, CreateClientData } from '../types/index';

export async function getAllClients(): Promise<Client[]> {
  const response = await api.get<{data: Client[]}>('/clients');
  return response.data.data;
}

export async function createClient(data: CreateClientData): Promise<Client> {
  const response = await api.post<{data: Client}>('/clients', data);
  return response.data.data;
}

export async function deleteClient(id: number): Promise<void> {
  await api.delete(`/clients/${id}`);
}
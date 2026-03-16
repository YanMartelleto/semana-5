import { api } from './api';
import type { ServiceOrder, CreateServiceOrderData } from '../types';

export async function getAllOrders(): Promise<ServiceOrder[]> {
  const response = await api.get<{data: ServiceOrder[]}>('/service-orders');
  return response.data.data.map(order => ({
    ...order,
    clientId: (order as any).client_id
  }));
}

export async function createOrder(data: CreateServiceOrderData): Promise<ServiceOrder> {
  const response = await api.post<{data: ServiceOrder}>('/service-orders', data);
  return response.data.data;
}

export async function deleteOrder(id: number): Promise<void> {
  await api.delete(`/service-orders/${id}`);
}

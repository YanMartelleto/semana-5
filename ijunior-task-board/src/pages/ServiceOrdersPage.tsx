import { useEffect, useState } from 'react';
import { getAllOrders, deleteOrder } from '../service/serviceOrdersService';
import type { ServiceOrder, Client } from '../types/index';
import { getAllClients } from '../service/clientService'; 
import NewOrderForm from '../components/NewServiceForm';

const ServiceOrderPage = () => {
  const [orders, setOrders] = useState<ServiceOrder[]>([]);
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
  async function load() {
    const ordersData = await getAllOrders();
    const clientsData = await getAllClients();

    setOrders(ordersData);
    setClients(clientsData);
  }
  load();
}, []);

  async function handleDelete(id: number) {
    await deleteOrder(id);
    setOrders(prev => prev.filter(c => c.id !== id));
  }

  function handleOrderCreated(order: ServiceOrder) {
    setOrders(prev => [...prev, order]);
  }

  return (
    <div>
      <h2 className='flex justify-center text-4xl'>Ordens de serviço</h2>

      <NewOrderForm clients={clients} onOrderCreated={handleOrderCreated} />

      <ul className='pt-3 flex flex-col gap-4'>
       {orders.length === 0 ? (
        <p className={"px-10"} >Nenhuma ordem cadastrada</p>
          ) : (
        orders.map(order => {
          const client = clients.find(c => c.id === order.clientId);
          console.log(order);

          return (
            <li className={"px-10"} key={order.id}>
              <strong>Cliente:</strong> {client?.name} <br/>
              <strong>Dispositivo:</strong> {order.device} <br/>
              <strong>Problema:</strong> {order.issue} <br/>
              <strong>Status:</strong> {order.status} <br/>

              <button onClick={() => handleDelete(order.id)}>
                Excluir
              </button>
            </li>
            );
        })
      )}
      </ul>


    </div>
  );
};

export default ServiceOrderPage;
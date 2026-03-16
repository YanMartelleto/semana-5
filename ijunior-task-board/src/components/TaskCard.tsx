import { getAllOrders} from '../service/serviceOrdersService';
import type { ServiceOrder, Client } from '../types/index';
import { getAllClients } from '../service/clientService'; 
import { useEffect, useState } from 'react';

export default function TaskCard (){
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

   return (
   <div>
      
      <ul className='pt-3 px-10 flex flex-col gap-4'>
       {orders.length === 0 ? (
        <p className={"px-10"} >Nenhuma ordem cadastrada</p>
          ) : (
        orders.map(order => {
          const client = clients.find(c => c.id === order.clientId);
          console.log(order);

          return (
            <li className={` rounded w-1/4 ${order.status==="open" ? "bg-red-400" : order.status==="done" ? "bg-green-400" : "bg-gray-400"}  `} key={order.id}>
              <strong>Cliente:</strong> {client?.name} <br/>
              <strong>Dispositivo:</strong> {order.device} <br/>
              <strong>Problema:</strong> {order.issue} <br/>
            </li>
            );
        })
      )}
      </ul>

   </div>
   )
}
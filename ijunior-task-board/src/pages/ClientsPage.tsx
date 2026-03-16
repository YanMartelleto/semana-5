import { useEffect, useState } from 'react';
import { getAllClients, deleteClient } from '../service/clientService';
import type { Client } from '../types/index';
import NewClientForm from '../components/NewClientForm';

const ClientsPage = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getAllClients();
      setClients(data);
    }
    load();
  }, []);

  async function handleDelete(id: number) {
    await deleteClient(id);
    setClients(prev => prev.filter(c => c.id !== id));
  }

  function handleClientCreated(client: Client) {
    setClients(prev => [...prev, client]);
  }

  return (
    <div>
      <h2 className='flex justify-center text-4xl'>Clientes</h2>

      <NewClientForm onClientCreated={handleClientCreated} />

      <ul className='pt-3 flex flex-col gap-4'>
        {clients.length === 0 ? (
          <p>Nenhum cliente cadastrado</p>
        ) : (
          clients.map(client => (
            <li className={"px-10"} key={client.id}>
             <p><strong>Cliente: </strong> {client.name}</p>
             <p><strong>Contato: </strong> Telefone: {client.phone} Email: {client.email}</p>
             <button onClick={() => handleDelete(client.id)}>
                Excluir
             </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ClientsPage;
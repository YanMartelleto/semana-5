import {useState} from "react";
import { Header } from './components/Header'; 
import NewServiceForm from './components/NewServiceForm';
import TaskCard from './components/TaskCard';

export type Service = {
  clientName: string;
  deviceModel: string;
  defect: string;
  status: boolean;
};

export function App() { 
  const [services, setServices] = useState<Service[]>([]);
  const [showForm, setShowForm] = useState(false);

  function addService(service:Service){
    setServices([...services, service]);
    setShowForm(false);
  }

  function toggleStatus(index: number) {
    setServices(
      services.map((service, i) => {
        if (i === index) {
          return {
            ...service,
            status: !service.status
          };
        }
        return service;
      })
    );
}

  return (
      <div>
        <Header />
        <menu className="flex gap-20">
          {!showForm && (
          <button onClick={() => setShowForm(true)} className="pl-8 pb-3 cursor-pointer hover:underline text-[#f06f6b]">
            Cadastrar novo serviço
          </button>
          )}
          {showForm && (
            <button className="pl-8 pb-3 cursor-pointer hover:underline text-[#f06f6b]" onClick={() => setShowForm(false)}>
               Cancelar
            </button>
          )}
        </menu>

        <main>
          {showForm&& (
          <NewServiceForm onAddService={addService} />
          )}
          
          {services.map((service, index) =>(
           <TaskCard key={index} service={service} index={index} onToggleStatus={toggleStatus}/>
          ))}
        </main>
      
      </div>
  )
}
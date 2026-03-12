import NewServiceForm from '../components/NewServiceForm';
import TaskCard from '../components/TaskCard';
import {useState} from "react";
import type { Service } from "../types/index"


function ServiceOrdersPage () {

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
        <menu className="flex gap-20">
          {!showForm && (
          <button onClick={() => setShowForm(true)} className="pl-8 pb-3 cursor-pointer hover:underline text-[#4161a5]">
            Cadastrar novo serviço
          </button>
          )}
          {showForm && (
            <button className="pl-8 pb-3 cursor-pointer hover:underline text-[#4161a5]" onClick={() => setShowForm(false)}>
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

export default ServiceOrdersPage;
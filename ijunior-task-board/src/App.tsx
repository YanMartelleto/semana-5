import {useState} from "react";
import { Header } from './components/Header'; 
import NewServiceForm from './components/NewServiceForm';
import TaskCard from './components/TaskCard';

export type Service = {
  clientName: string;
  deviceModel: string;
  defect: string;
  status: string;
};

export function App() { 
  const [services, setServices] = useState<Service[]>([]);
  function addService(service:Service){
    setServices([...services, service]);
  }
  return (
    <div>
      <Header />
      <NewServiceForm onAddService={addService} />
      
      {services.map((service, index) =>(
       <TaskCard  key={index} service={service}/>
      ))}
     
    </div>
  )
}
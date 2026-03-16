import { useState } from "react";
import { createOrder } from "../service/serviceOrdersService";
import type { Client, CreateServiceOrderData, ServiceOrder } from "../types";

type Props = {
    clients: Client[];
    onOrderCreated: (order: ServiceOrder) => void;
};

const NewOrderForm = ({ onOrderCreated, clients }: Props) => {
  const [clientId, setClientId] = useState <number | null>(null);
  const [device, setDevice] = useState("");
  const [issue, setIssue] = useState("");
  const [status, setStatus] = useState<"open" | "in_progress" | "done">("open");

 async function handleSubmit(e: React.SyntheticEvent) {
  e.preventDefault();

  if (clientId === null) return;

  const newOrder: CreateServiceOrderData = {
    clientId,
    device,
    issue,
    status: status as "open" | "in_progress" | "done",
  };

  const createdOrder = await createOrder(newOrder);

  onOrderCreated(createdOrder);

  setClientId(null);
  setDevice("");
  setIssue("");
}

  return (
    <form className = {"px-5"} onSubmit={handleSubmit}>
      <h3 className = {"pt-5"}>Nova ordem de serviço</h3>

      <div className="flex justify-around w-1/2">
        <select className = {"hover:cursor-pointer"} value={clientId ?? ""} onChange={(e) => setClientId(Number(e.target.value))}>
          <option value="">Selecione um cliente</option>
          {clients.map(client => (
            <option key={client.id} value={client.id}>
              {client.name}
            </option>
          ))}
        </select>
        <input
          placeholder="Dispositivo"
          value={device}
          onChange={(e) => setDevice(e.target.value)}
        />
        <input
          placeholder="Problema"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />
        <select className = {"hover:cursor-pointer"} value={status} onChange={(e) => setStatus(e.target.value as "open" | "in_progress" | "done")}>
          <option value="open"> Aberto</option>
          <option value="in_progress"> Em progresso</option>
          <option value="done"> Concluído</option>
        </select>
        <button className= "hover:cursor-pointer hover:underline text-blue-400" type="submit">Criar OS</button>
      </div>
    </form>
  );
};

export default NewOrderForm;
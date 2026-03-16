import { useState } from "react";
import { createClient } from "../service/clientService";
import type { CreateClientData, Client } from "../types";

type Props = {
  onClientCreated: (client: Client) => void;
};

const NewClientForm = ({ onClientCreated }: Props) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const newClient: CreateClientData = {
      name,
      phone,
      email,
    };

    const createdClient = await createClient(newClient);

    console.log(createdClient);

    onClientCreated(createdClient);

    setName("");
    setPhone("");
    setEmail("");
  }

  return (
    <form className = {"px-5"} onSubmit={handleSubmit}>
      <h3 className = {"pt-5"}>Novo Cliente</h3>

      <input
        type="text"
        placeholder="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button className= "hover:cursor-pointer hover:underline text-blue-400" type="submit">Criar Cliente</button>
    </form>
  );
};

export default NewClientForm;
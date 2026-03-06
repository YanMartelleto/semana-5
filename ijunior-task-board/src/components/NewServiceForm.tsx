import React, { useState } from 'react';
import type { Service } from "../App";

type Props = {
    onAddService: (service:Service) => void;
};

export default function NewServiceForm ({onAddService}: Props){
    const [clientName, setClientName] = useState("");
    const [deviceModel, setDeviceModel] = useState("");
    const [defect, setDefect] = useState("");
    const [status, setStatus] = useState("");

    function handleSubmit (e: React.SyntheticEvent){
        e.preventDefault();
    
        const newService: Service = {
            clientName,
            deviceModel,
            defect,
            status,
        };

        onAddService(newService);
        
        setClientName("");
        setDeviceModel("");
        setDefect("");
        setStatus("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Nome do cliente' value={clientName} onChange={(e)=> setClientName(e.target.value)} />
            <input placeholder='Modelo do aparelho' value={deviceModel} onChange={(e)=> setDeviceModel(e.target.value)} />
            <input placeholder='Defeito' value={defect} onChange={(e)=> setDefect(e.target.value)} />
            <input placeholder='status' value={status} onChange={(e)=> setStatus(e.target.value)} />        

            <button type="submit">Adicionar</button> 
        </form>
    );
}

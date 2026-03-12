import React, { useState } from 'react';
import type { Service } from "../App";

type Props = {
    onAddService: (service:Service) => void;
}

export default function NewServiceForm ({onAddService}: Props){
    const [clientName, setClientName] = useState("");
    const [deviceModel, setDeviceModel] = useState("");
    const [defect, setDefect] = useState("");

    function handleSubmit (e: React.SyntheticEvent){
        e.preventDefault();
    
        const newService: Service = {
            clientName,
            deviceModel,
            defect,
            status:false
        };

        onAddService(newService);
        
        setClientName("");
        setDeviceModel("");
        setDefect("");
    }

    return (
        <form className = {"px-8 pb-6 flex w-1/2 justify-between"} onSubmit={handleSubmit}>
            <input  className="border rounded px-2 py-1 bg-[#51615b] border-transparent" placeholder='Nome do cliente' value={clientName} onChange={(e)=> setClientName(e.target.value)} required/>
            <input className="border rounded px-2 py-1 bg-[#51615b] border-transparent" placeholder='Modelo do aparelho' value={deviceModel} onChange={(e)=> setDeviceModel(e.target.value)} required/>
            <input className="border rounded px-2 py-1 bg-[#51615b] border-transparent" placeholder='Defeito' value={defect} onChange={(e)=> setDefect(e.target.value)} required/>       
            <button className="text-[#f06f6b] cursor-pointer hover:underline" type="submit">Adicionar</button> 
        </form>
    );
}

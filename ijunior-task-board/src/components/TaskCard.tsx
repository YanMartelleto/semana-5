import type { Service } from "../types/index";

type Props = {
    service: Service;
    index: number;
    onToggleStatus: (index:number) => void;
};

export default function TaskCard ({ service, index, onToggleStatus }: Props){
    return (
        <div className= "px-12">
            <section className = {`p-2 border rounded mb-2 ${service.status ? "bg-[#4dd34d]": "bg-[#f12f5d]"} border-transparent w-1/2 `}>
                <div className = {"flex flex-row justify-between"}>
                    <h2><strong>Cliente: </strong>{service.clientName}</h2>
                    <button onClick={() => onToggleStatus(index)} className = "cursor-pointer hover:underline self"> Alterar Status </button>
                </div>
                <p><strong>Aparelho: </strong>{service.deviceModel}</p>
                <p><strong>Defeito: </strong>{service.defect}</p>
            </section>
        </div>

    )


}
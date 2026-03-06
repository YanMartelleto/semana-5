import type { Service } from "../App";

type Props = {
    service: Service;
};

export default function TaskCard ({ service }: Props){
    return (
        <div className = "bg-gray-600 ">
            <span>
                <h2><p><strong>Cliente: </strong></p>{service.clientName}</h2> <p><strong>Aparelho: </strong>{service.deviceModel}</p>
            </span>
            <p><strong>Defeito: </strong>{service.defect}</p>
        </div>

    )


}
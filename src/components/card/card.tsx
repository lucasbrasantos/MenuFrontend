import { useFoodDataDelete } from "../../hooks/useFoodDataDelete";
import "./card.css";

interface CardProps {
    id: number;
    price: number;
    title: string;
    image: string;
}

export function Card({ id, price, image, title }: CardProps) {
    const { mutate } = useFoodDataDelete();

    return (
        <div className="card">
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p><b>Valor:</b> {price}</p>
            <p><b>Id: </b> {id}</p>
            <button onClick={() => mutate(id)}>Delete</button>
        </div>
    );
}

import './TodoList.css'
import { useSelector } from "react-redux";

export default function TodoList() {

    const list = useSelector((state) => state.list);

    return (
        <ul>
            {list.map(item => (
                <li key={item.id}>
                    <span style={{ flex: 1 }}>{item.text}</span>
                </li>
            ))}
        </ul>
    )
}
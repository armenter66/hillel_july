import './TodoList.css'

export default function TodoList({list, setList}) {
    const toggleDone =(id) => {
        setList(prev =>
        prev.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
        ));
    };

    const deleteItem = (id) => {
        setList(prev => prev.filter(item => item.id !== id));
    };

    if (!list.length) {
        return <p style={{ marginTop: 12 }}>No tasks yet added!</p>;
    }
    return (
        <ul>
            {list.map(item => (
                <li key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.done}
                        onChange={() => toggleDone(item.id)}
                    />
                <span style={{ flex: 1 }}>{item.text}</span>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                </li>
            ))}
        </ul>
    )
}
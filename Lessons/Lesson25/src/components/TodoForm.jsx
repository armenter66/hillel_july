export default function TodoForm({ onSave }) {
  const handleClick = () => {
    const todoText = document.forms[0].todo.value;
    console.log(todoText);
    onSave(todoText)
  };

  return (
    <form>
      <input type="text" name="todo" />
      <button type="button" onClick={handleClick}>Save</button>
    </form>
  )
}
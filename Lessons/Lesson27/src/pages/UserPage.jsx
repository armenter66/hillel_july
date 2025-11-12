import { useContext } from "react";
import { UserContext } from "../contexts/contexts";

export default function UserPage() {
  const user = useContext(UserContext);
  

  const handleFormSubmit = () => {
    const form = document.forms.userForm;
    const newUser = {
      id: form.id.value,
      name: form.name.value,
      role: form.role.value,
    };
    user.change(newUser);
    console.log(newUser);
  }
  return (
    <div>
      <h2>UserPage</h2>
      <form name="userForm">
        <div>id: <input type="text" name="id" defaultValue={user.value.id} /></div>
        <div>name: <input type="text" name="name" defaultValue={user.value.name} /></div>
        <div>role:
          <select name="role" defaultValue={user.value.role}>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div>
          <button type="button" onClick={handleFormSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  )
}
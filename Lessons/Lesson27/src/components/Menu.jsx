import { Link } from "react-router";

export default function Menu() {
  return (
    <nav>
      <Link to="/">Main page</Link> <br />
      <Link to="/list">List page</Link> <br />
      <Link to="/user">User page</Link> <br />
    </nav>
  )
}
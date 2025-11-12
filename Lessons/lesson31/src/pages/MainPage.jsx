import { useContext } from "react"
import { LanguageContext, UserContext } from "../contexts/contexts"

export default function MainPage() {
  const value = useContext(LanguageContext);
  const {value: user} = useContext(UserContext);

  return (
    <div>
      <h1>MainPage</h1>
      <div>Current language: {value}</div>
      <div>Current user: {user.name}, his role is {user.role}</div>
    </div>
  )
}
import { NavLink } from "react-router-dom"
import st from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={st.nav}>
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/users"><li>Users</li></NavLink>
        </ul>
    </nav>
  )
}

export default Navigation
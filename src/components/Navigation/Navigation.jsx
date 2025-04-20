import { NavLink } from "react-router-dom"
import SearchUser from "../SearchUser/SearchUser"
import st from "./Navigation.module.css"

const Navigation = () => {
  return (
    <nav className={st.nav}>
        <div className={st.navContainer}>
          <ul className={st.navList}>
              <NavLink to="/"><li>Home</li></NavLink>
              <NavLink to="/users"><li>Users</li></NavLink>
          </ul>
        <SearchUser/>
        </div>
    </nav>
  )
}

export default Navigation
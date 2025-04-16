import { Outlet } from "react-router-dom"
import Navigation from "../Navigation/Navigation"

const Layout = () => {
  return (
    <section>
        <Navigation />
        <Outlet />
    </section>
  )
}

export default Layout
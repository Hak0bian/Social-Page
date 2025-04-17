import { Outlet } from "react-router-dom"
import { Navigation, Footer } from "../index"

const Layout = () => {
  return (
    <section>
        <Navigation />
        <Outlet />
        <Footer/>
    </section>
  )
}

export default Layout
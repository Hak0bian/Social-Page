import { Routes, Route } from 'react-router-dom'
import { Layout } from './components'
import { Home, Users, Profile, LoginPage } from "./pages"
import './App.css'

function App() {
  return (
    <section>
      <Routes>
        <Route  path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/profile/:id' element={<Profile/>} />
          <Route path='/login' element={<LoginPage/>} />
        </Route>
      </Routes>
    </section>
  )
}

export default App
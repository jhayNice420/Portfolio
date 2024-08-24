

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Nav from './componet/nav'
import Home from './componet/home'

function App() {

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Nav/>}>
      <Route index element={<Home/>}/>

      </Route>
     </Routes>
     </BrowserRouter>

    </>
  )
}

export default App

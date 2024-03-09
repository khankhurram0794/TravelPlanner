import './App.css'
import { createBrowserRouter , Outlet } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Homepage from './pages/Homepage'
import TravelSpot from './pages/TravelSpot'

export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<Homepage/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signup',
        element:<SignUp/>
      },
      {
        path:'/travelspots',
        element:<TravelSpot/>
      }
    ]
  }
])

function App() {
  return(
    <>
    <Outlet/>
    </>
  )
}

export default App

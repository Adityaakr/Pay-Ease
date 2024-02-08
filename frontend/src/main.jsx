import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Signup from './Pages/Signup.jsx'
import Signin from './Pages/Signin.jsx'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppBar } from './components/AppBar.jsx'


const router = createBrowserRouter([
  {
    path: '',
    children: [
      {
        path: "/signup",
        element: <Signup/>
      },
      {
        path: "/",
        element: <Signin/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   {/* <RouterProvider router={router}/> */}
   <AppBar/>
  </React.StrictMode>,
)

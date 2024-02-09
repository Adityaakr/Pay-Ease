import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Signup from './Pages/Signup.jsx'
import Signin from './Pages/Signin.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Dashboard } from './Pages/Dashboard.jsx'
import { SendMoney } from './Pages/SendMoney.jsx'


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
      },
      {
        path:"/dashboard",
        element: <Dashboard/>
      },{
        path: "/send",
        element: <SendMoney/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)

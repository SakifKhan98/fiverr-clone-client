import React from 'react'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/footer'
import Home from './pages/home/Home'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Orders from './pages/orders/Orders'
import MyGigs from './pages/myGigs/MyGigs'
import Add from './pages/add/Add'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import './app.scss'

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
// import Pay from './pages/pay/Pay'
// import Success from './pages/success/Success'

const App = () => {
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/gigs', element: <Gigs /> },
        { path: '/gig/:id', element: <Gig /> },
        { path: '/orders', element: <Orders /> },
        { path: '/mygigs', element: <MyGigs /> },
        { path: '/add', element: <Add /> },
        { path: '/messages', element: <Messages /> },
        { path: '/message/:id', element: <Message /> },
        { path: '/login', element: <Login /> },
        { path: '/register', element: <Register /> },
        // { path: '/pay', element: <Pay /> },
        // { path: '/success', element: <Success /> },
      ],
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Navbar /> */}
    </div>
  )
}

export default App

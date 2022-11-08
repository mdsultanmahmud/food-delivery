import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import AddService from "./pages/AddService/AddService"
import Blog from "./pages/Blog/Blog"
import Home from "./pages/home/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Reviews from "./pages/Reviews/Reviews"
import Services from "./pages/Services/Services"

function App() {
  const router = createBrowserRouter([
      {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/services',
            element:<Services></Services>
          },
          {
            path:'/blog',
            element:<Blog></Blog>
          },
          {
            path:'/login',
            element:<Login></Login>
          },
          {
            path:'/register',
            element:<Register></Register>
          },
          {
            path:'/addServices',
            element:<AddService></AddService>
          },
          {
            path:'/reviews',
            element:<Reviews></Reviews>
          }
        ]
      }
  ])
  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App

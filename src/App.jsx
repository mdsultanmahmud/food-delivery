import { Toaster } from "react-hot-toast"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/MainLayout"
import AddService from "./pages/AddService/AddService"
import Blog from "./pages/Blog/Blog"
import Home from "./pages/home/Home/Home"
import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"
import Reviews from "./pages/Reviews/Reviews"
import UpdateReview from "./pages/Reviews/UpdateReview"
import Services from "./pages/Services/Services"
import PrivateRoutes from "./Routes/PrivateRoutes"
import ServiceDetails from "./sharedPages/ServiceDetails/ServiceDetails"

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
            element:<Services></Services>,
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
            element:<PrivateRoutes><AddService></AddService></PrivateRoutes>
          },
          {
            path:'/reviews',
            element:<PrivateRoutes><Reviews></Reviews></PrivateRoutes>
          },
          {
            path:'/serviceDetails/:id',
            element:<ServiceDetails></ServiceDetails>,
            loader: ({params}) => fetch(`https://food-delivery-server-mu.vercel.app/services/${params.id}`)
          },
          {
            path:'/updateReview/:id',
            element:<UpdateReview></UpdateReview>,
            loader: ({params}) => fetch(`https://food-delivery-server-mu.vercel.app/reviews/${params.id}`)
          }
        ]
      }
  ])
  return (
    <div >
     <RouterProvider router={router}></RouterProvider>
     <Toaster></Toaster>
    </div>
  )
}

export default App

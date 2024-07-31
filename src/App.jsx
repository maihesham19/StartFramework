import './App.css'
import Home from "./components/Home/Home"
import About from './components/About/About';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from './components/Layout/Layout';
import NotFound from './components/Notfound/Notfound';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';

function App() {

const router = createBrowserRouter([
  {
    path:"",
    element:<Layout />,
    children: [
    {
      index: true,
      element: <Home />
    },
    {
      path:"/about",
      element: <About />
    },
    {
      path:"/portfolio",
      element: <Portfolio />
    },
    {
      path:"/contact",
      element: <Contact />
    },
    {
      path:"*",
      element: <NotFound />
    }
  ]
  }
])

  return (
   <RouterProvider router={router}/>
  );
}

export default App
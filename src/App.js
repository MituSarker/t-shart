
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Main from './components/layout/Main';
import Orders from './components/Orders/Orders';
import About from './components/About/About';

function App() {
const router =createBrowserRouter([
  {
    path:'/',
    element:<Main></Main>,
    children:[
      {
        path:'/',
        loader:()=> fetch('t-shirt.json'),
        element:<Home></Home>
      },
      {
        path:'/orders',
        element:<Orders></Orders>
      },
      {
        path:'/About',
        element:<About></About>
      }
    ]
  }

])

  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

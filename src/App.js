import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import { Toaster } from 'react-hot-toast';

function App() {
  const router = createBrowserRouter([
   {
    path: '/',
    element:<Home></Home>
   }

  ])

  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;

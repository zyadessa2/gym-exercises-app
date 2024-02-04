import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import Layout from './Components/Layout';
import Home from './Pages/Home';
import AllExercises from './Pages/AllExercises';
import Notfound from './Pages/Notfound';


let routers = createBrowserRouter([
  {path:'' , element:<Layout/>,children:[
    {index:true , element:<Home/>},
    {path:'allexercises' , element:<AllExercises/>}
  ]},
  {path:'*' , element:<Notfound/>}
])

function App() {
  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}

export default App;

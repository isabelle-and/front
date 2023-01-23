import {BrowserRouter, Routes, Route} from "react-router-dom";
import Categories from "./components/Categories";

import Home from "./pages/Home";
import Products from "./pages/Products";
//import Orders from "./pages/Orders";




export default function APP(){
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/produtos" element={<Products/>}/>
      <Route path="/categories" element={<Categories/>}/>
      {/* <Route path="/orders" element={<Orders/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}



//instalar npm install react-router-dom
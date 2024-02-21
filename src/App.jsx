import { useState } from 'react'
import Layout from "./layouts/layout/index.jsx";
import {Route, Routes} from "react-router";
import Home from "./pages/home/index.jsx";
import Gallery from "./pages/gallery/index.jsx";
import About from "./pages/about/index.jsx";

function App() {

  return (
    <div className="page">
     <Layout>
         <Routes>
             <Route path={"/"} element={<Home/>} />
             <Route path={"/gallery"} element={<Gallery />} />
             <Route path={"/about"} element={<About />} />
         </Routes>
     </Layout>
    </div>
  )
}

export default App

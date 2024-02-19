import React from "react";
import Header from "../header/index.jsx";
import Footer from "../footer/index.jsx";


function Layout ({children}) {
    return (
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;
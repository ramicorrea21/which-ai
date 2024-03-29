import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";
import { Tools } from "./pages/tools"
import { Categs } from "./pages/categs";
import { Addtool } from "./pages/addtool";
import { Nav } from "./component/nav";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    return (
        <div>
            <BrowserRouter basename={basename}>
                    <Nav/>
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<h1>Not found!</h1>} />
                        <Route element={<Tools/>} path="/tools/:category"/>
                        <Route element={<Categs/>} path="/categories"/>
                        <Route element={<Addtool/>} path="/addtool"/>
                    </Routes>
                    <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

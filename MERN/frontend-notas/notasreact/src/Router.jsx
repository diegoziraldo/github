import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import New from "./components/New";

import Header from "./components/Header";

const Router = ()=>{
    return(
        <BrowserRouter> {/* Dentro del Browser router pondremos todos los componentes que vamos a usar como enrutador */}
            <Header />
            <Routes>
                <Route exact path="/" element={<New/>}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default Router;
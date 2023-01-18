import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import New from "./components/New";
import Header from "./components/Header";

const Router = ()=>{
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path="/" element={<New/>}></Route>
            </Routes>
        </BrowserRouter>

    );
}

export default Router;
import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage1 from "./Components/Pages/RegisterPage1";
import IndexPage from "./Components/Pages/IndexPage";
import HomePage from "./Components/Pages/HomePage";
import RegisterPage2 from "./Components/Pages/RegisterPage2";
import RegisterPage3 from "./Components/Pages/RegisterPage3";
import UserContext from "./Components/UserContext";
import { useState } from "react";

function App() {
    const [userInfo, setUserInfo] = useState({});
    return (
        <UserContext.Provider value={{userInfo: userInfo, setUserInfo: setUserInfo}}>
            <BrowserRouter>
                <Routes>

                    <Route key={"Register1"} path={"/register1"} element={<RegisterPage1 />}></Route>
                    <Route key={"Index"} path={"/"} element={<IndexPage />}></Route>
                    <Route key={"Home"} path={"/home"} element={<HomePage />}></Route>
                    <Route key={"Register2"} path={"/register2"} element={<RegisterPage2 />}></Route>
                    <Route key={"Register3"} path={"/register3"} element={<RegisterPage3 />}></Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    )
}

export default App

import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage1 from "./Components/Pages/RegisterPage1";
import IndexPage from "./Components/Pages/IndexPage";
import HomePage from "./Components/Pages/HomePage";
import RegisterPage2 from "./Components/Pages/RegisterPage2";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route key={"Register1"} path={"/register1"} element={<RegisterPage1 />}></Route>
                    <Route key={"Index"} path={"/"} element={<IndexPage />}></Route>
                    <Route key={"Home"} path={"/home"} element={<HomePage />}></Route>
                    <Route key={"Register2"} path={"/register2"} element={<RegisterPage2 />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

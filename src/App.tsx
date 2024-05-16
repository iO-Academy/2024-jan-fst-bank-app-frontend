import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from "./Components/Pages/RegisterPage";
import IndexPage from "./Components/Pages/IndexPage";
import HomePage from "./Components/Pages/HomePage";
import AddMoneyPage from "./Components/Pages/AddMoneyPage";
import ViewYourAccountPage from "./Components/Pages/ViewYourAccountPage";
import LoginPage from "./Components/Pages/LoginPage";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route key={"Register"} path={"/register"} element={<RegisterPage/>}></Route>
                    <Route key={"Index"} path={"/"} element={<IndexPage/>}></Route>
                    <Route key={"Home"} path={"/home"} element={<HomePage/>}></Route>
                    <Route key={"AddMoney"} path={"/addMoney"} element={<AddMoneyPage/>}></Route>
                    <Route key={"YourAccount"} path={"/account"} element={<ViewYourAccountPage/>}></Route>
                    <Route key={"Login"} path={"/Login"} element={<LoginPage/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

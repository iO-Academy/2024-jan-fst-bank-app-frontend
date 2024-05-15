import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from "./Components/Pages/RegisterPage";
import IndexPage from "./Components/Pages/IndexPage";
import HomePage from "./Components/Pages/HomePage";
import AddFundsPage from "./Components/pages/AddFundsPage";
import AccountBalanceAtom from "./Components/Atoms/AccountBalanceAtom";
import AddAccountPage from "./Components/Pages/AddAccountPage";
import AccountPage from "./Components/Pages/AccountPage";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route key={"Register"} path={"/register"} element={<RegisterPage />}></Route>
                    <Route key={"Index"} path={"/"} element={<IndexPage />}></Route>
                    <Route key={"Home"} path={"/home"} element={<HomePage />}></Route>
                    <Route key={"AddFunds"} path={"/add"} element={<AddFundsPage />}></Route>
                    <Route key={"AddAccount"} path={"/addAccount"} element={<AddAccountPage />}></Route>
                    <Route key={"Account"} path={"/account"} element={<AccountPage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

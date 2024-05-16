import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import RegisterPage from "./Components/Pages/RegisterPage";
import IndexPage from "./Components/Pages/IndexPage";
import HomePage from "./Components/Pages/HomePage";
import AccountBalanceAtom from "./Components/Atoms/AccountBalanceAtom";
import BackButtonAtom from "./Components/Atoms/BackButtonAtom";
import HeaderAtom from "./Components/Atoms/HeaderAtom";
import Transactions from "./Components/Molecules/TransactionMolecule";
import DropdownMenuMolecule from "./Components/Molecules/DropdownMenuMolecule";
import TextBoxAtom from "./Components/Atoms/TextAtom";
import ButtonAtom from "./Components/Atoms/ButtonAtom";
import TextInputAtom from "./Components/Atoms/TextInputAtom";

function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route key={"Register"} path={"/register"} element={<RegisterPage />}></Route>
                    <Route key={"Index"} path={"/"} element={<IndexPage />}></Route>
                    <Route key={"Home"} path={"/home"} element={<HomePage />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App

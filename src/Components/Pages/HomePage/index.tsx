import UserHeaderMolecule from "../../Molecules/UserHeaderMolecule";
import ButtonAtom from "../../Atoms/ButtonAtom";
import AccountBalanceAtom from "../../Atoms/AccountBalanceAtom";
import {useNavigate} from "react-router-dom";
import BackButtonAtom from "../../Atoms/BackButtonAtom";


function HomePage() {
    const navigate = useNavigate()
    return (
        <>
            <BackButtonAtom visibility={"invisible"}/>
            <UserHeaderMolecule/>
            <div className={"flex mt-20 justify-center"}>
                <ButtonAtom value={"Sign Out"} margin={"ml-2 mr-2"} onClick={() => {
                    sessionStorage.removeItem("token")
                    navigate("/login")
                }}/>
                <ButtonAtom value={"Add Funds"} margin={"ml-2"} onClick={() => navigate("/addMoney")}/>
            </div>
        </>
    )
}

export default HomePage;

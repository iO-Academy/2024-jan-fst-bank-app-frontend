import {useNavigate} from "react-router-dom";
import BackButtonAtom from "../../Atoms/BackButtonAtom";
import UserHeaderMolecule from "../../Molecules/UserHeaderMolecule";
import ButtonAtom from "../../Atoms/ButtonAtom";
import TextInputAtom from "../../Atoms/TextInputAtom";
import TextBoxAtom from "../../Atoms/TextAtom";


function LoginPage() {
    const navigate = useNavigate()
    return (
        <>
            <BackButtonAtom visibility={"invisible"}/>
            <UserHeaderMolecule/>
            <br/>
            <TextBoxAtom textContent={"Enter your 6 digit passcode:"} />
            <br/>
            <TextInputAtom />
            <div className={"flex mt-20 justify-center"}>
                <ButtonAtom value={"Sign In"} margin={"ml-2"} onClick={() => navigate("/home")} />
            </div>
        </>
    )
}

export default LoginPage

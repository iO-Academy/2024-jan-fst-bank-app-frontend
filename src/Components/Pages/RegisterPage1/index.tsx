import ButtonAtom from "../../Atoms/ButtonAtom";
import HeaderAtom from "../../Atoms/HeaderAtom";
import { useNavigate } from "react-router-dom";

function RegisterPage1() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col h-2/4 justify-between p-5 drop-shadow-2xl">
                    <HeaderAtom mainHeader={"Welcome to Fetch Bank"}></HeaderAtom>
                    <ButtonAtom value = "register" type = "submit" onClick={() => navigate('/register2')}></ButtonAtom>
                </div>
            </div>
        </>
    )
}

export default RegisterPage1;
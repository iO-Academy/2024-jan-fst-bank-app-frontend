import {useContext} from "react";
import UserContext from "../../UserContext";
import PasscodeFormMolecule from "../../Molecules/PasscodeFormMolecule";

function RegisterPage3() {
    const {userInfo} = useContext(UserContext)

    console.log(userInfo);
    return (
        <>
            <div className="flex items-center justify-center h-screen">
                <div className="flex flex-col h-2/4 justify-between p-5 drop-shadow-2xl">
                    <PasscodeFormMolecule></PasscodeFormMolecule>
                </div>
            </div>
        </>
    )
}

export default RegisterPage3;
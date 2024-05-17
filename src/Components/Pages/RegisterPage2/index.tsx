import HeaderAtom from "../../Atoms/HeaderAtom";
import RegisterFormMolecule from "../../Molecules/RegisterFormMolecule";

function RegisterPage2() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col h-2/4 justify-between p-5 drop-shadow-2xl">
                <HeaderAtom mainHeader={"Your Details"}></HeaderAtom>
                <RegisterFormMolecule></RegisterFormMolecule>
            </div>
        </div>
    )
}

export default RegisterPage2;
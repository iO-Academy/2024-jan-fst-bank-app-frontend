import ButtonAtom from "../../Atoms/ButtonAtom";
import RegistrationMolecule from "../../Molecules/RegistrationMolecule";

function RegisterPage() {
    return (
        <>
            <h1>Welcome to the bank</h1>
            <ButtonAtom value = "register" type = "submit"></ButtonAtom>
        </>
    )
}

export default RegisterPage;

import BackButtonAtom from "../../Atoms/BackButtonAtom";
import HeaderAtom from "../../Atoms/HeaderAtom";
import DropdownMenuMolecule from "../../Molecules/DropdownMenuMolecule";
import TextBoxAtom from "../../Atoms/TextAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import TextInputAtom from "../../Atoms/TextInputAtom";

function AddMoneyPage() {
    return(
        <>
            <BackButtonAtom />
            <HeaderAtom mainHeader={"Add Funds"} />
            <DropdownMenuMolecule accounts={["savings account", "current account"]} />
            <TextBoxAtom textContent={"Type the amount:"} />
            <TextInputAtom />
            <ButtonAtom value={"Submit Funds"} />
        </>
    )
}

export default AddMoneyPage
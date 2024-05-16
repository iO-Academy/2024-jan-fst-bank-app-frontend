import BackButtonAtom from "../../Atoms/BackButtonAtom";
import HeaderAtom from "../../Atoms/HeaderAtom";
import Transactions from "../../Molecules/TransactionMolecule";

function ViewYourAccountPage() {
    return(
        <>
            <BackButtonAtom />
            <HeaderAtom mainHeader={"Your account transactions:"} />
            <Transactions />
        </>
    )
}

export default ViewYourAccountPage

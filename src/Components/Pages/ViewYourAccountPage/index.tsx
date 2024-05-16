import BackButtonAtom from "../../Atoms/BackButtonAtom";
import HeaderAtom from "../../Atoms/HeaderAtom";
import Transactions from "../../Molecules/TransactionMolecule";

function ViewYourAccountPage() {
    return(
        <>
            <BackButtonAtom/>
            <div className={"flex justify-center flex-col items-center max-w-screen-xl"}>
                <HeaderAtom mainHeader={"Your account transactions:"}/>
                <Transactions/>
            </div>
        </>
    )
}

export default ViewYourAccountPage

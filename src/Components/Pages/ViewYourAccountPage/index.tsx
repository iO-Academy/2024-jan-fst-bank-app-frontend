import BackButtonAtom from "../../Atoms/BackButtonAtom";
import HeaderAtom from "../../Atoms/HeaderAtom";
import Transactions from "../../Molecules/TransactionMolecule";
import {useNavigate} from "react-router-dom";

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

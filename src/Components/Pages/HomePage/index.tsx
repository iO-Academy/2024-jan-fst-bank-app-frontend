import UserHeaderMolecule from "../../Molecules/UserHeaderMolecule";
import ButtonAtom from "../../Atoms/ButtonAtom";
import AccountBalanceAtom from "../../Atoms/AccountBalanceAtom";


function HomePage() {
    return (
        <>
            <UserHeaderMolecule/>
            <AccountBalanceAtom accountType={"Current Account"} balanceValue={150.00} />
            <div className={"flex mt-20 justify-center"}>
            <ButtonAtom value={"Add Account"} />
            <ButtonAtom value={"Add Funds"} />
            <ButtonAtom value={"Sign Out"} />
            </div>
        </>
    )
}

export default HomePage;
import UserHeaderMolecule from "../../Molecules/UserHeaderMolecule";
import ButtonAtom from "../../Atoms/ButtonAtom";
import AccountBalanceAtom from "../../Atoms/AccountBalanceAtom";


function HomePage() {
    return (
        <>
            <UserHeaderMolecule/>
            <AccountBalanceAtom accountType={"Current Account"} balanceValue={150.00} />
            <div className={"flex mt-20 justify-center"}>
                <ButtonAtom value={"Add Account"} margin={"ml-2 mr-2"} />
                <ButtonAtom value={"Sign Out"} margin={"ml-2 mr-2"} />
                <ButtonAtom value={"Add Funds"} margin={"ml-2"} />
            </div>
        </>
    )
}

export default HomePage;
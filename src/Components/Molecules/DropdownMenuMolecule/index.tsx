import DropdownOptionAtom from "../../Atoms/DropdownOptionAtom";

interface DropdownProps {
    accounts: Array<string>
}

function DropdownMolecule(props: DropdownProps) {
    const {accounts} = props
    return (
        <>
            <div className={"flex justify-center"}>
                <select
                    className={"rounded-md bg-emerald-500 border-1 border border-emerald-900 text-white p-2 mt-16"}>
                    <option selected disabled value="">Select an account</option>
                    {accounts.map(account => <DropdownOptionAtom accountOption={account}/>)}
                </select>
            </div>
        </>
    )
}

export default DropdownMolecule

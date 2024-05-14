import DropdownOptionAtom from "../../Atoms/DropdownOptionAtom";

interface DropdownProps {
    accounts: Array<string>
}

function DropdownMolecule(props: DropdownProps) {
    const {accounts} = props
    return (
        <>
            <select name="" id=""
                    className="rounded-md bg-emerald-500 border-1 border border-emerald-900 text-white p-2 m-2">
                <option selected disabled value="">Select an account</option>
                {accounts.map(account => <DropdownOptionAtom accountOption={account} />)}
            </select>
        </>
    )
}

export default DropdownMolecule

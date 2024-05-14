import DropdownOptionAtom from "../../Atoms/DropdownOptionAtom";

interface DropdownProps {
    accounts: Array<string>
    margin?: string
//  margin is changeable, change as required by passing in as prop
}

function DropdownMolecule(props: DropdownProps) {
    const {accounts, margin} = props
    return (
        <>
            <div className={"flex justify-center"}>
            <select name="" id=""
                    className={"rounded-md bg-emerald-500 border-1 border border-emerald-900 text-white p-2 m-" + margin}>
                <option selected disabled value="">Select an account</option>
                {accounts.map(account => <DropdownOptionAtom accountOption={account} />)}
            </select>
            </div>
        </>
    )
}

export default DropdownMolecule

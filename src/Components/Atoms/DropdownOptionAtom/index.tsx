interface AccountOptionProp {
    accountOption: string
}

function DropdownOptionAtom (props: AccountOptionProp) {
    const {accountOption} = props
    return (
        <option>{accountOption}</option>
    )
}

export default DropdownOptionAtom

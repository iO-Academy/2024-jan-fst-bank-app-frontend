interface AccountOption {
    accountOption: string
}

function DropdownOptionAtom ({accountOption}: AccountOption) {
    return (
        <option value="">{accountOption}</option>
    )
}

export default DropdownOptionAtom

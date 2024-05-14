interface AccountOption {
    accountOption: string
}

function DropdownOptionAtom ({accountOption}: AccountOption) {
    return (
        <option>{accountOption}</option>
    )
}

export default DropdownOptionAtom

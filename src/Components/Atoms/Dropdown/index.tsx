interface DropdownProps {
    valueName: string
    valueOptions1: string
    valueOptions2?: string
    valueOptions3?: string
}

function DropdownAtom(props: DropdownProps) {
    const {valueName, valueOptions1, valueOptions3, valueOptions2} = props
    return (
        <>
            <select name="" id=""
                    className="rounded-md bg-emerald-500 border-1 border border-emerald-900 text-white p-2 m-2">
                <option selected disabled value="">{valueName}</option>
                <option value="">{valueOptions1}</option>
                <option value="">{valueOptions2}</option>
                <option value="">{valueOptions3}</option>
            </select>
        </>
    )
}

export default DropdownAtom
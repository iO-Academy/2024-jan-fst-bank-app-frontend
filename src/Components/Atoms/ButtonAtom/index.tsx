interface ButtonProps {
    value: string
    type?: 'submit' | 'reset' | 'button' | undefined
    onClick?: () => void
    margin?: string
    //  margin is changeable, change as required by passing in as prop
}

function ButtonAtom(props: ButtonProps) {
    const {value, type, onClick, margin} = props
    return  (
        <div className={"flex justify-center"}>
        <button className={"border-1 border border-emerald-900 rounded-md p-2 bg-emerald-500 text-white m-" + margin}  type={type} onClick={onClick}>{value}</button>
        </div>
    )
}

export default ButtonAtom

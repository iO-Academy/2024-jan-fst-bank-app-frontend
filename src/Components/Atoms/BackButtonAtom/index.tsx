interface BackButtonProps {
    type?: 'submit' | 'reset' | 'button' | undefined
    onClick?: () => void
    width?: string
}

function BackButtonAtom(props: BackButtonProps) {
    const {type, onClick, width="80"} = props
    return  (
        <button className={"text-green-500 rounded-md text-3xl p-3 w-" + width} type={type} onClick={onClick}>⇦</button>
    )
}

export default BackButtonAtom

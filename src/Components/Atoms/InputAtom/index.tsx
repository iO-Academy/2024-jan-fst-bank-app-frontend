interface IinputAtom {
    type: string
    placeholder: string
}

function InputAtom (props: IinputAtom) {
    const {type, placeholder} = props
    return (
        <input type={type} className="font-serif text-4xl text-center mt-20 text-emerald-500" placeholder={placeholder} />
    )
}

export default InputAtom
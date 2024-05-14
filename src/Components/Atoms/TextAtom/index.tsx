interface TextBoxAtom {
    textContent: string
}

function TextBoxAtom (props: TextBoxAtom) {
    const {textContent} = props
    return (
        <p className="font-serif text-lg text-center mt-10 text-emerald-800">{textContent}</p>
    )
}

export default TextBoxAtom

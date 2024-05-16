interface HeaderAtom {
    mainHeader: string
}

function HeaderAtom (props: HeaderAtom) {
    const {mainHeader} = props
    return (
        <h1 className="font-serif text-4xl text-center mt-20 text-emerald-500 mb-10" >{mainHeader}</h1>
    )
}

export default HeaderAtom

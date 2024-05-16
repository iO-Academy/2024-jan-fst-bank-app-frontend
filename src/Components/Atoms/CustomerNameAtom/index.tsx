interface CustomerNameProp {
    name: string
}

function CustomerNameAtom(props: CustomerNameProp) {
    const {name} = props
    return  (
        <div className={"flex justify-center"}>
            <div className={"font-serif text-4xl text-center text-emerald-500"}>{name}</div>
        </div>
    )
}

export default CustomerNameAtom
interface TransactionProp {
    timestamp: number
    corresponding_account: number
    transaction_value: number
}

function TransactionAtom (props: TransactionProp) {
    const {timestamp, corresponding_account, transaction_value} = props
    const date = new Date(timestamp);
    return (
        <>
            <div className={"mt-5 p-1 bg-emerald-500 flex justify-center mx-96 border border-1 border-emerald-900"}>
        <span className={"mr-20 p-1 text bg-emerald-500 text-white"}>{date.toDateString() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()}</span>
            <span className={"mr-20 p-1 text bg-emerald-500 text-white"}>{corresponding_account}</span>
            <span className={"mr-30 p-1 text bg-emerald-500 text-white"}>£{transaction_value}</span>
            </div>
            <br/>
        </>
    )
}

export default TransactionAtom



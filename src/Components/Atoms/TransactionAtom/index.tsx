interface TransactionProp {
    transactionInfo: string
    transactionAmount: number
}

function TransactionAtom (props: TransactionProp) {
    const {transactionInfo, transactionAmount} = props
    return (
        <span>{transactionInfo}{transactionAmount}</span>
    )
}

export default TransactionAtom

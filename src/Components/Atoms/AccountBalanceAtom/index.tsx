interface AccountBalanceProp {
    accountType: string
    balanceValue: number
    customerLabel?: string
}

function AccountBalanceAtom(props: AccountBalanceProp) {
    const {accountType, balanceValue, customerLabel} = props
    return (
        <>
            <div className={"flex justify-center"}>
                <span className={"mt-20 border-1 border border-emerald-900 rounded-md p-2 bg-emerald-500 text-white"}>{accountType}  £{balanceValue}</span>
                <br/>
                {
                    customerLabel &&
                    <span>{customerLabel}</span>
                }
            </div>
        </>
    )
}

export default AccountBalanceAtom
interface AccountBalanceProp {
    accountType?: string
    balanceValue?: number
    customLabel?: string
}

function AccountInfoAtom(props: AccountBalanceProp) {
    const {accountType, balanceValue, customLabel} = props
    console.log(props)
    return (
            <div className={"flex justify-center"}>
                <span className={"mt-20 border-1 border border-emerald-900 rounded-md p-2 bg-emerald-500 text-white"}>{accountType}  £{balanceValue}</span>
                <br/>
                {
                    customLabel &&
                    <span>{customLabel}</span>
                }
            </div>
    )
}

export default AccountInfoAtom
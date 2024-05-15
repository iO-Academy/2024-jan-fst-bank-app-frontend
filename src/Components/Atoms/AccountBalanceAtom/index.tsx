interface AccountBalanceProp {
    balanceValue: number
}

function AccountBalanceAtom(props: AccountBalanceProp) {
    const {balanceValue} = props
    return  (
        <div className={"flex justify-center"}>
            <div className={"text-white"}>{balanceValue}</div>
        </div>
    )
}

export default AccountBalanceAtom
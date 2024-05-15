import {useState} from "react";
import {useEffect} from "react";
import AccountBalanceAtom from "../../Atoms/AccountBalanceAtom";

function CustomerBalance() {

    const [accountBalance, setAccountBalance] = useState(0)
    const getAccountBalance = () => {
        fetch()
            .then(response => response.json())
            .then(customerBalance => {
                setAccountBalance(customerBalance.balance)
            })

        useEffect(getAccountBalance, [])


    }
    return (
        <>
            <AccountBalanceAtom balanceValue={accountBalance}/>
        </>
    )
}

export default CustomerBalance
import {useState} from "react";
import {useEffect} from "react";
import AccountBalanceAtom from "../../Atoms/AccountBalanceAtom";
import TextBoxAtom from "../../Atoms/TextAtom";

function CustomerBalance() {

    const [accountInfo, setAccountInfo] = useState(0)
    const getAccountInfo = () => {
        fetch()
            .then(response => response.json())
            .then(accountInformation => {
                setAccountInfo(accountInformation)

            })

        useEffect(getAccountInfo, [])


    }
    return (
        <>
            <AccountBalanceAtom balanceValue={accountInfo.balance}/>
        </>
    )
}

export default CustomerBalance
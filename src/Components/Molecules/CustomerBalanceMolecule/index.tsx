// basic functionality of this page is ready but will complete in another story

import {useState} from "react";
import {useEffect} from "react";
import AccountInfoAtom from "../../Atoms/AccountInfoAtom";

interface IAccountInfo {
    account_type? : string
    balance? : number
}

function CustomerBalance() {
    const [accountInfo, setAccountInfo] = useState<IAccountInfo>({})
    const getAccountInfo = () => {
        fetch('http://localhost:3000/user/' + 127098373986)
            .then(response => response.json())
            .then(accountInformation => {
                setAccountInfo(accountInformation.accounts[0])
            })
        }
    useEffect(getAccountInfo, [])
    return (
        <>
            <AccountInfoAtom accountType={accountInfo.account_type} balanceValue={accountInfo.balance} />
        </>
    )
}

export default CustomerBalance


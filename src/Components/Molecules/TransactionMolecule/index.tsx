import {useState} from "react";
import {useEffect} from "react";
import TransactionAtom from "../../Atoms/TransactionAtom";
import DropdownOptionAtom from "../../Atoms/DropdownOptionAtom";

function Transactions() {

    const [transactionInfo  , setTransactionInfo] = useState([{timestamp: 1666632563517, corresponding_account: 31407268, transaction_value: 7.99}])
    // const getTransactionInfo = () => {
    //     fetch()
    //         .then(response => response.json())
    //         .then(transactionInformation => {
    //             setTransactionInfo(transactionInformation)
    //         })
    //
    //     useEffect(getTransactionInfo, [])
    //
    //
    // }
    return (
        <>
            {transactionInfo.map(eachTransaction =>
                <TransactionAtom timestamp={eachTransaction.timestamp} corresponding_account={eachTransaction.corresponding_account}
                                 transaction_value={eachTransaction.transaction_value} />
            )}

        </>
    )
}

export default Transactions
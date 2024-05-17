import {useState} from "react";
import {useEffect} from "react";
import HeaderAtom from "../../Atoms/HeaderAtom";

function UserHeader() {

    //placeholder to show that this is for testing/placeholder
    //change to empty string when ready
    const [customerName, setCustomerName] = useState('TEST')

    // The below function will be implemented when the API is complete

    // const getCustomerName = () => {
    //     fetch()
    //         .then(response => response.json())
    //         .then(customerName => {
    //             setCustomerName(customerName.first_name)
    //         })
    //
    //     useEffect(getCustomerName, [])
    //
    // }
    return (
            <HeaderAtom mainHeader={'Welcome back, ' + customerName}/>
    )
}

export default UserHeader
import {useState} from "react";
import {useEffect} from "react";
import HeaderAtom from "../../Atoms/HeaderAtom";

function UserHeader() {

    const [customerName, setCustomerName] = useState('Liz')

    // The below function will be implemented when the API is complete

    const getCustomerName = () => {
        fetch()
            .then(response => response.json())
            .then(customerName => {
                setCustomerName(customerName.first_name)
            })

        useEffect(getCustomerName, [])

    }
    return (
            <HeaderAtom mainHeader={'Welcome back, ' + customerName}/>
    )
}

export default UserHeader
import {useState} from "react";
import {useEffect} from "react";
import HeaderAtom from "../../Atoms/HeaderAtom";


const [customerName, setCustomerName] = useState('')
const getCustomerName = () => {
    fetch()
        .then(response => response.json())
        .then(customerName => {
            setCustomerName(customerName.first_name)
        })

    useEffect(getCustomerName, [])

    return (
        <>
            <HeaderAtom mainHeader={'Welcome back '+ customerName} />
        </>
    )

}
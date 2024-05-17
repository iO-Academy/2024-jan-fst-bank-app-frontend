import BackButtonAtom from "../../Atoms/BackButtonAtom";
import HeaderAtom from "../../Atoms/HeaderAtom";
import DropdownMenuMolecule from "../../Molecules/DropdownMenuMolecule";
import TextBoxAtom from "../../Atoms/TextAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import TextInputAtom from "../../Atoms/TextInputAtom";
import {a} from "vite/dist/node/types.d-aGj9QkWt";
import {useEffect, useState} from "react";


function AddMoneyPage() {

    const [accounts, setAccounts] = useState<string[]>([])
    const custNo: string = sessionStorage.getItem('customer_number') || '127098373986'

    useEffect(() => {
        async function fetchData (customer_number: string): Promise<T> {

            await fetch(`http://localhost:3000/user/${customer_number}`, {
                method: 'GET',
                headers: {'Content-Type': "application/json", "Authorization": 'Bearer ' + sessionStorage.getItem('token')},
            })
                .then(response => response.json())
                .then(response => {if(response.success === true){
                    setAccounts(response.accounts.map(a => a['account_number']))

                }
                else{
                    alert(response.message)
                }
                })
        }
        fetchData(custNo)
    }, []);



    return(
        <>
            <BackButtonAtom />
            <HeaderAtom mainHeader={"Add Funds"} />
            <DropdownMenuMolecule accounts={accounts} />
            <TextBoxAtom textContent={"Type the amount:"} />
            <TextInputAtom />
            <ButtonAtom value={"Submit Funds"} />
        </>
    )
}

export default AddMoneyPage
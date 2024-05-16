import buttonAtom from "../../Atoms/ButtonAtom";
import React, { useState } from 'react';
import { Navigate } from "react-router-dom";

const backendUrl = 'localhost:3000';

const RegistrationPage: React.FC = () => {
    const [token, setToken] = useState <boolean | null> (null)
    const [user, setUser] = useState<{name: string; customerNumber: string} | null> (null)
    const handleReg = async (username: string, password: string) => {
        try {
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password })
            }).then(
                response => response.json()
            ).then(data => {
                const {customer, token} = data;
                if (customer) {
                    setToken(token);
                    setUser(customer)
                    const {customerNumber} = customer;
                    return (
                        <Navigate to={"/user/" + customerNumber} replace={true}/>
                    )
                } else {
                    return (
                        <Navigate to={"/register"} replace={true}/>
                        )
                    }
                }
            )
        }
        catch (error) {
            console.log('Registration Failed:', error )
        }
    }
}

export default RegistrationPage;
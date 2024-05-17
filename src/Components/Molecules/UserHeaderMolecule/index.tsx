import {useContext, useState} from "react";
import {useEffect} from "react";
import HeaderAtom from "../../Atoms/HeaderAtom";
import UserContext from "../../UserContext";

function UserHeader() {
    const {userInfo} = useContext(UserContext)

    return (
            <HeaderAtom mainHeader={'Welcome back, ' + userInfo.firstName}/>
    )
}

export default UserHeader
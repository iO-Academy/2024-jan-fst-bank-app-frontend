import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function IndexPage() {

    const navigate = useNavigate()

    const checkRegistered = () => {
        if (localStorage.getItem("registered")) {
            navigate('/login')}
    }

    useEffect(checkRegistered, [])

    return (

        <>
            <h1>index page</h1>
            <p>Will carry out some logic to check if the device is registered
            then choose where to send the user</p>
        </>
    )
}

export default IndexPage;
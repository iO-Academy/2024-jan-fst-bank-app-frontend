import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

function IndexPage() {

    const navigate = useNavigate()

    const checkRegistered = () => {
        if (localStorage.getItem("registered")) {
            navigate('/login')
        } else {
            navigate('/register1')
        }
    }

    useEffect(checkRegistered, [])
}

export default IndexPage;
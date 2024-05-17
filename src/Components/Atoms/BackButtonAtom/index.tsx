import {useNavigate} from "react-router-dom";

interface BackButtonProps {
    type?: 'submit' | 'reset' | 'button' | undefined
    width?: string
    visibility?: string
}

function BackButtonAtom(props: BackButtonProps) {
    const navigate = useNavigate()
    const {type, visibility = 'visible', width="80"} = props
    return  (
        <button className={`text-green-500 rounded-md text-3xl p-3 w- ${visibility} ` + width}  type={type} onClick={() => navigate(-1)}>⇦</button>
    )
}

export default BackButtonAtom

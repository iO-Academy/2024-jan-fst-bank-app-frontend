import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import {useContext} from "react";
import UserContext from "../../UserContext";

function RegisterFormMolecule() {

    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { setUserInfo } = useContext(UserContext)

    const handleRegistration = (data) => {
            setUserInfo(data);
            navigate('/register3')
    }

    return (
        <>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleRegistration)}>
                <br/>
                <input className={"border-2 border-emerald-900 rounded-md p-1"} type="text" name="first_name" placeholder="First Name" {...register('first_name', {required: true})}/>
                <br/>
                <input className={"border-2 border-emerald-900 rounded-md p-1"} type="text" name="last_name" placeholder="Last Name" {...register('last_name', {required: true})}/>
                <br/>
                <input className={"border-2 border-emerald-900 rounded-md p-1"} type="email" name="email" placeholder="Email"{...register('email', {required: true})}/>
                <ButtonAtom value="Register" type = "submit"></ButtonAtom>
            </form>
        </>

    )
}

export default RegisterFormMolecule
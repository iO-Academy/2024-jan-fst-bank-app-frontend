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
                <input type="text" name="first_name" placeholder="Fist Name" {...register('first_name', {required: true})}/>
                <br/>
                <input type="text" name="last_name" placeholder="Last Name" {...register('last_name', {required: true})}/>
                <br/>
                <input type="email" name="email" placeholder="Email"{...register('email', {required: true})}/>
                <br/>
                <ButtonAtom value="register" type = "submit"></ButtonAtom>
            </form>
        </>

    )
}

export default RegisterFormMolecule
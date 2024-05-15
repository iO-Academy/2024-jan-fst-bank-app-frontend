import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;

function RegisterFormMolecule() {

    const { register, handleSubmit } = useForm();
    const handleRegistration = (data) => {
        for (const [key, value] of Object.entries(data)) {
            document.cookie = `${key}=${value}`;
        }
    }
    return (
        <>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleRegistration)}>
                <input type="text" name="firstName" placeholder="Fist Name" {...register('firstName', {required: true})}/>
                <br/>
                <input type="text" name="lastName" placeholder="Last Name" {...register('lastName', {required: true})}/>
                <br/>
                <input type="email" name="email" placeholder="Email"{...register('email', {required: true})}/>
                <br/>
                <ButtonAtom value="submit"></ButtonAtom>
            </form>
        </>

    )
}

export default RegisterFormMolecule
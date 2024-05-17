import {useNavigate} from "react-router-dom";
import BackButtonAtom from "../../Atoms/BackButtonAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import { useForm } from "react-hook-form";


function LoginPage() {
    const navigate = useNavigate()
    const { register, handleSubmit,
        formState : { errors } } = useForm();

    const handleSubmitLogin = async (data) => {
        await fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({"passcode": data.loginPasscode, "customer_number": 123321234543})
        })
            .then(response => response.json())
            .then(response => {if(response.customer_number){
               sessionStorage.setItem("token", response.token)
                navigate('/home')
            }
            else{
                alert(response.message)
            }
            })
    }


    return (
        <>
            <BackButtonAtom visibility={"invisible"}/>
            <form onSubmit={handleSubmit(handleSubmitLogin)}>
                <h3>Enter your 6 digit passcode:</h3>
                <input type="number" name="loginPasscode" placeholder="passcode" {...register('loginPasscode',
                    {required: true, minLength: 6, maxLength: 6})}></input>
                {errors.passcode && errors.passcode.type === "required" && (
                    <span>This is required</span>
                )}
                {errors.passcode && errors.passcode.type === "minLength" && (
                    <span>Passcode must be 6 characters</span>
                )}
                {errors.passcode && errors.passcode.type === "maxLength" && (
                    <span>Passcode must be 6 characters</span>
                )}
                <ButtonAtom value="login" type="submit"></ButtonAtom>
            </form>
        </>
    )
}

export default LoginPage

import {useNavigate} from "react-router-dom";
import BackButtonAtom from "../../Atoms/BackButtonAtom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import { useForm } from "react-hook-form";


function LoginPage() {
    const navigate = useNavigate()
    const { register, handleSubmit,
        formState : { errors } } = useForm();

    const handleSubmitLogin = async (data) => {
        const customerNumber = sessionStorage.getItem('customerNumber');
        await fetch("http://localhost:3000/login", {
            method: 'POST',
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({"passcode": data.loginPasscode, "customer_number": customerNumber})
        })
            .then(response => response.json())
            .then(response =>
            {if (response.message == "Login successful"){
               sessionStorage.setItem("token", response.token)
                navigate('/home')
            }
            else{
                alert("Incorrect log-in details")
            }
            })
    }


    return (
        <>
            <BackButtonAtom visibility={"invisible"}/>
            <form onSubmit={handleSubmit(handleSubmitLogin)}>
                <h3 className="font-serif text-lg text-center mt-10 text-emerald-800">Enter your 6 digit passcode:</h3>
                <div className={"flex justify-center justify-items-center "}>
                    <input className="font-serif text-lg border-2 border-emerald-900 rounded-md p-1 mt-10" type="number" name="loginPasscode" placeholder="Passcode" {...register('loginPasscode',
                        {required: true, minLength: 6, maxLength: 6})}></input>
                </div>
                    {errors.passcode && errors.passcode.type === "required" && (
                        <span>This is required</span>
                    )}
                    {errors.passcode && errors.passcode.type === "minLength" && (
                        <span>Passcode must be 6 characters</span>
                    )}
                    {errors.passcode && errors.passcode.type === "maxLength" && (
                        <span>Passcode must be 6 characters</span>
                    )}
                    <ButtonAtom value="Log in" type="submit"></ButtonAtom>
            </form>
        </>
)
}

export default LoginPage

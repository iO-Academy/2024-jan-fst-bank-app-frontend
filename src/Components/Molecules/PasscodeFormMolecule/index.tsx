import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ButtonAtom from "../../Atoms/ButtonAtom";
import {useContext, useState} from "react";
import UserContext from "../../UserContext";

function PasscodeFormMolecule() {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { userInfo, setUserInfo } = useContext(UserContext)

    const handleSubmitPasscode = async (data) => {
        if (data.passcode == data.passcodeConfirm) {
            userInfo['passcode'] = (data.passcode).toString()
            console.log(userInfo)
            await fetch('http://localhost:3000/register', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(userInfo)
            });
            localStorage.setItem("registered", "true")
            setUserInfo(userInfo)
            navigate('/home')
        }
        else {
            alert("Passcodes do not match");
        }
    }

    return (
        <>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSubmitPasscode)}>
                <h3>Please provide a memorable 6 digit passcode</h3>
                <input type="number" name="passcode" placeholder="passcode" {...register('passcode', {required: true, minLength:6, maxLength:6})}/>
                {errors.passcode && errors.passcode.type === "required" && (
                    <span>This is required</span>
                )}
                {errors.passcode && errors.passcode.type === "minLength" && (
                    <span>Passcode must be 6 characters</span>
                )}
                {errors.passcode && errors.passcode.type === "maxLength" && (
                    <span>Passcode must be 6 characters</span>
                )}
                <br/>
                <h3>Please confirm your passcode</h3>
                <input type="number" name="passcodeConfirm" placeholder="passcodeConfirm" {...register('passcodeConfirm', {required: true, minLength:6, maxLength:6})}/>
                {errors.passcodeConfirm && errors.passcodeConfirm.type === "required" && (
                    <span>This is required</span>
                )}
                {errors.passcodeConfirm && errors.passcodeConfirm.type === "minLength" && (
                    <span>Passcode must be 6 characters</span>
                )}
                {errors.passcodeConfirm && errors.passcodeConfirm.type === "maxLength" && (
                    <span>Passcode must be 6 characters</span>
                )}
                <br/>
                <ButtonAtom value="register" type = "submit"></ButtonAtom>
            </form>
        </>

    )
}

export default PasscodeFormMolecule
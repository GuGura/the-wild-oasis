import {useMutation} from "@tanstack/react-query";
import {signup as signupApi} from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useSignup() {
    const {mutate: signup, isLoading} = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            console.log(user)
            toast.success("Account successfully created! Please verify the new account from the user's email Address.")
        },
        onError: (error) => {
            console.log("Error", error)
        }
    })
    return {signup, isLoading}
}
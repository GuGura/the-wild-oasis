import supabase from "./supabase.js";

export async function login({email, password}) {
    let {data, error} = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (error) {
        throw new Error(error.message)
    }
    return data
}

export async function getCurrentUser() {
    // 1. Check localstorage session
    const {data: session} = await supabase.auth.getSession();
    if (!session.session) return null;

    // 2. If Exist getUser to Server (You must have JWT)
    const {data, error} = await supabase.auth.getUser();
    console.log(data);

    if (error) {
        throw new Error(error.message)
    }
    return data?.user
}

export async function logout() {
    const {error} = await supabase.auth.signOut()
    if (error) throw new Error(error.message)
}
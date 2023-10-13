import React, {useEffect} from 'react';
import {useUser} from "../features/authentication/useUser.js";
import Spinner from "./Spinner.jsx";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const FullPage = styled.div`
  height: 100dvh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`

function ProtectedRoute({children}) {
    const navigate = useNavigate();

    // 1. Load the authenticated user
    const {isLoading, isAuthenticated} = useUser();

    // 2. If there is No authenticated user, redirect to the /login
    useEffect(() => {
        if (!isAuthenticated && !isLoading){
            navigate('/login')}
    }, [isAuthenticated, isLoading, navigate]);

    // 3. While loading, show a spinner
    if (isLoading)
        return (
            <FullPage>
                <Spinner/>
            </FullPage>
        )
    // 4. If there IS a user, render the app
    if(!!isAuthenticated) return children
}

export default ProtectedRoute;
// src/CallbackComponent.js
import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'react-oauth2-code-pkce';

function CallbackComponent() {
    const { authService, token } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        authService.handleCallback()
            .then(() => {
                console.log("CallbackComponent", token);
                // Redirect to the desired route after successful authentication
                navigate('/');
            })
            .catch((error) => {
                // Handle any errors that occurred during the callback
                console.error('Error handling callback:', error);
                // Redirect to an error page or display an error message
                navigate('/error');
            });
    }, [authService, navigate, token]);

    return <div>Processing authentication callback...</div>;
}

export default CallbackComponent;
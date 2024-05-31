import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CallbackComponent from './CallbackComponent.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from 'react-oauth2-code-pkce';

const root = ReactDOM.createRoot(document.getElementById('root'));

//create random string
const randomString = Math.random().toString(36).substring(2, 15);

// retrieve the current url
const currentHost = window.location.host;
const currentProtocol = window.location.protocol;

const callbackUrl = `${currentProtocol}//${currentHost}/callback`;
const authConfig = {
    clientId: 'c-qo6u66leundir30b1bnv',
    authorizationEndpoint: 'https://auth.akeyless.io/oidc/provider/acc-oyn4yi8ywcTm/oauth2/auth',
    tokenEndpoint: 'https://auth.akeyless.io/oidc/provider/acc-oyn4yi8ywcTm/oauth2/token',
    redirectUri: `${callbackUrl}`,
    scope: 'openid email',
    state: randomString,
    // Example to redirect back to original path after login has completed
    preLogin: () => localStorage.setItem('preLoginPath', window.location.pathname),
    postLogin: () => window.location.replace(localStorage.getItem('preLoginPath') || ''),
    decodeToken: true,
    autoLogin: false,
}

root.render(
    <React.StrictMode>
        <AuthProvider authConfig={authConfig}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<div className="container"><App /></div>} />
                    <Route path="/callback" element={<CallbackComponent />} />
                </Routes>
            </Router>
        </AuthProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

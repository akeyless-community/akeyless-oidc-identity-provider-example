
import './App.css';
import React, { useContext } from 'react'
import { AuthContext } from 'react-oauth2-code-pkce'

function App() {
    const { token, tokenData, logOut, error, logIn } = useContext(AuthContext)

    if (error) {
        return (
            <>
                <div style={{ color: 'red' }}>An error occurred during authentication: {error}</div>
                <button type='button' onClick={() => logOut()}>
                    Log out
                </button>
            </>
        )
    }

    return (
        <>
            {token ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        color: 'grey',
                        fontFamily: 'sans-serif',
                    }}
                >
                    <div
                        style={{
                            padding: '10px',
                            margin: '10px',
                            border: '1px solid white',
                            borderRadius: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <p>Welcome, {tokenData?.email}!</p>

                        <button type='button' style={{ width: '100px' }} onClick={() => logOut()}>
                            Log out
                        </button>

                        <p>Use this token to authenticate yourself</p>
                        <pre
                            style={{
                                width: '400px',
                                margin: '10px',
                                padding: '5px',
                                border: 'black 2px solid',
                                wordBreak: 'break-all',
                                whiteSpace: 'break-spaces',
                            }}
                        >
                            {token}
                        </pre>
                    </div>
                </div>
            ) : (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        color: 'grey',
                        fontFamily: 'sans-serif',
                    }}
                >
                    <div
                        style={{
                            padding: '10px',
                            margin: '10px',
                            border: '1px solid white',
                            borderRadius: '10px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <p>Please login to continue</p>

                        <button type='button' style={{ width: '100px' }} onClick={() => logIn()}>
                            Log in
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}


export default App;

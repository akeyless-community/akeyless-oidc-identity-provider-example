import { render, screen } from '@testing-library/react';
import { AuthContext } from 'react-oauth2-code-pkce';
import App from './App';

const renderWithAuth = (value) =>
    render(
        <AuthContext.Provider value={{ logIn: vi.fn(), logOut: vi.fn(), ...value }}>
            <App />
        </AuthContext.Provider>
    );

test('renders login prompt when not authenticated', () => {
    renderWithAuth({ token: '' });
    expect(screen.getByText(/please login to continue/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /log in/i })).toBeInTheDocument();
});

test('renders token and email when authenticated', () => {
    renderWithAuth({ token: 'test-token', tokenData: { email: 'user@example.com' } });
    expect(screen.getByText(/welcome, user@example.com/i)).toBeInTheDocument();
    expect(screen.getByText('test-token')).toBeInTheDocument();
});

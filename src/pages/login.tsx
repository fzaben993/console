import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Form } from '../components/ui/Form';
import { InputEmail, InputPassword } from '../components/ui/Input';
import { Unauthenticated } from '../components/Unauthenticated';
import { LayoutStack } from '../components/ui/LayoutStack';

// Placeholder for SDK
const sdk = {
    forConsole: {
        account: {
            createEmailPasswordSession: async (data: any) => {
                console.log('Login attempt', data);
                // Simulate API call
                return new Promise((resolve) => setTimeout(resolve, 1000));
            },
            createOAuth2Session: (data: any) => {
                console.log('OAuth login', data);
            }
        }
    }
};

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [disabled, setDisabled] = useState(false);

    const login = async () => {
        setDisabled(true);
        try {
            await sdk.forConsole.account.createEmailPasswordSession({
                email,
                password
            });
            alert('Login simulated successfully!');
        } catch (error) {
            console.error(error);
            alert('Login failed');
        } finally {
            setDisabled(false);
        }
    };

    const onGithubLogin = () => {
        sdk.forConsole.account.createOAuth2Session({
            provider: 'github',
            success: window.location.origin,
            failure: window.location.origin,
            scopes: ['read:user', 'user:email']
        });
    };

    return (
        <Unauthenticated
            title="Sign in"
            links={
                <>
                    <li className="inline-links-item">
                        <a href="/recover">
                            <span className="text">Forgot password?</span>
                        </a>
                    </li>
                    <li className="inline-links-item">
                        <a href="/register">
                            <span className="text">Sign up</span>
                        </a>
                    </li>
                </>
            }>
            <Form onSubmit={login}>
                <LayoutStack>
                    <div style={{ marginBottom: 'var(--gap-s, 8px)' }}>
                        <Button secondary fullWidth onClick={onGithubLogin} disabled={disabled}>
                            <span className="icon-github" aria-hidden="true"></span>
                            <span className="text">Sign in with GitHub</span>
                        </Button>
                    </div>
                    <span className="with-separators eyebrow-heading-3">or</span>

                    <InputEmail
                        id="email"
                        label="Email"
                        placeholder="Email"
                        autoFocus
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <InputPassword
                        id="password"
                        label="Password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button fullWidth submit disabled={disabled}>
                        Sign in
                    </Button>
                </LayoutStack>
            </Form>
        </Unauthenticated>
    );
};

export default LoginPage;

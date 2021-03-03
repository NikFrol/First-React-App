import { useState } from "react";

const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit({
            email,
            password,
        });
        setPassword('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    value={email}
                    type='text'
                    name='email'
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    value={password}
                    type='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button>
                Login
            </button>
        </form>
    )
};

export default LoginForm;
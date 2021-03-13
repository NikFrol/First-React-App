import { useState } from "react";

import Input from '../Imput/Imput';
import s from './login.module.css';

const LoginForm = ({ onSubmit }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit && onSubmit({
            email: email.target.value,
            password: password.target.value,
        });
        
    };

    const isTargetValue = (el) => el && el.target.value;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Input
                    label={'Email'}
                    value={isTargetValue(email)}
                    type='text'
                    name='email'
                    onChange={setEmail} />
                <Input
                    label={'Password'}
                    value={isTargetValue(password)}
                    type='password'
                    name='password'
                    onChange={setPassword} />
            </div>
            <button className={s.buttonContainern}>
                Login
            </button>
        </form>
    )
};

export default LoginForm;
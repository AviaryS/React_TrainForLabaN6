import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './style.css'
function Login({setLogin, users}) {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loginError, setLoginError] = useState(false);

    function onPasswordChange(e) {
        setPassword(e.target.value);
    }
    function onNameChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setNameError(false);
        setPasswordError(false);
        setLoginError(false);
        if (name.length >= 4 && password.length >= 4) {
            users.map((user) => {
                if (name === user.name && password === user.password) {
                    setLogin(true);
                    navigate('/');
                } else {
                    setLoginError(true);
                }
            });
        } else {
            if (name.length < 4) {
                setNameError(true);
            }
            if (password.length < 4 ) {
                setPasswordError(true);
            }
        }
    }

    return (
        <div className="login">
            <form action="" className="login__form">
                <div>
                    <label>имя:</label>
                    <br />
                    <input type="text"
                           value={name}
                           className={`input ${nameError ? "error" : ""}`}
                           onChange={onNameChange}
                    />
                    {nameError && <p>Минимум 4 символа</p>}
                </div>
                <div>
                    <label>пароль:</label>
                    <br />
                    <input type="text"
                           value={password}
                           className={`input ${passwordError ? "error" : ""}`}
                           onChange={onPasswordChange}
                    />
                    {passwordError && <p>Минимум 4 символа</p>}
                    {loginError && (
                        <p style={{ color: "red" }}>Имя или пароль неправильны</p>
                    )}
                </div>
                <button
                    className="button"
                    type="submit"
                    onClick={handleSubmit}
                >
                    войти
                </button>
            </form>
        </div>
    );
}

export default Login;
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import './style.css'

function Registration({setLogin, users, setUsers}) {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [id, setId] = useState(2);

    const [nameError, setNameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const [nameIsValid, setNameIsValid] = useState(validateName(name));
    const [passwordIsValid, setPasswordIsValid] = useState(validatePassword(password));

    function validateName(name) {
        return name.length >= 4;
    }

    function validatePassword(password) {
        return password.length >= 4;
    }

    function onNameChange(e) {
        setName(e.target.value);
        setNameIsValid(validateName(name))
    }

    function onPasswordChange(e) {
        setPassword(e.target.value);
        setPasswordIsValid(validatePassword(password))
    }

    function handleSubmit(e) {
        e.preventDefault();
        setNameError(false);
        setPasswordError(false);
        setId(id + 1);
        if (nameIsValid && passwordIsValid) {
            setUsers([...users, { id: id, name: name, password: password }]);
            setLogin(true);
            navigate('/');
        } else {
            if (name.length < 4) {
                setNameError(true);
            }
            if (password.length < 4) {
                setPasswordError(true);
            }
        }
    }

    return (
        <div className="register">
            <form action="" className="register__form">
                <div>
                    <label>имя:</label>
                    <br />
                    <input
                        type="text"
                        value={name}
                        className={`input ${nameError ? "error" : ""}`}
                        onChange={onNameChange}
                    />
                    {nameError && <p>Минимум 4 символа</p>}
                </div>
                <div>
                    <label>пароль:</label>
                    <br />
                    <input
                        type="text"
                        value={password}
                        className={`input ${passwordError ? "error" : ""}`}
                        onChange={onPasswordChange}
                    />
                    {passwordError && <p>Минимум 4 символа</p>}
                </div>
                <button
                    type='submit'
                    className="button"
                    onClick={handleSubmit}
                >
                    Регистрация
                </button>
            </form>
        </div>
    );
}

export default Registration;
import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './style.css'

function Header({login, setLogin}) {
    const navigate = useNavigate();
    const logout = () => {
        setLogin(false);
        return navigate('/');
    };

    return (
        <header className='header'>
            <div className='header__inner'>
                <div className='header__menu'>
                    {
                        login ?
                            <>
                                <Link to="/">Главная</Link>
                                <Link to="/favorites">Любимые картинки</Link>
                                <button onClick={logout}>Выйти</button>
                            </>
                            :
                            <>
                                <Link to={'/'}>Главная</Link>
                                <Link to={'/register'}>Регистрация</Link>
                                <Link to={'/login'}>Вход</Link>
                            </>
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
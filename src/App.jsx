import './App.css';
import {useState} from "react";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage";
import AlbumPage from "./pages/AlbumPage/AlbumPage";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";

function App() {
    const [login, setLogin] = useState(false);

    const [favorites, setFavorites] = useState([]);


    const [users, setUsers] = useState([
        { id: 0, name: 'admin', password: 'admin' },
        { id: 1, name: 'admin2', password: 'admin2' },
        { id: 2, name: 'admin3', password: 'admin3' },
    ]);

    console.log(favorites);

    return (
    <div className="App">
      <Router>
        <Header login={login} setLogin={setLogin}/>
        <Routes>
            <Route
                path='/register'
                element={
                    <RegisterPage
                        setLogin={setLogin}
                        users={users}
                        setUsers={setUsers}
                    />
                }
            />
            <Route
                path='/login'
                element={
                    <LoginPage
                        setLogin={setLogin}
                        users={users}
                    />
                }
            />
            <Route
                path='/'
                element={
                    <HomePage
                        login={login}
                    />
                }
            />
            <Route
                path="/albums/:id"
                element={
                    <AlbumPage
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                }
            />
            <Route
                path="/favorites"
                element={
                    <FavoritesPage
                        favorites={favorites}
                        setFavorites={setFavorites}
                    />
                }
            />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

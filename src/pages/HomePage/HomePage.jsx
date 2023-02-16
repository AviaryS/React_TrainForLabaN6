import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import './style.css'

function HomePage({login}) {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchAlbums = async () => {
            setLoading(true);
            await fetch("https://jsonplaceholder.typicode.com/albums")
                .then((res) => res.json())
                .then((json) => {
                    setAlbums(json);
                })
                .finally(() => {
                    setLoading(false);
                });
        };
        fetchAlbums();
    }, []);

    if (loading) {
        return <Loading />;
    }

    return (
        <div className='albums'>
            {albums.map((item) => {
                return (
                    <div className='album' key={item.id}>
                        <p>{item.title}</p>
                        {login &&
                            <button className='button' onClick={() => navigate("/albums/" + item.id)}>
                                Перейти
                            </button>
                        }
                    </div>
                );
            })}
        </div>
    );
}

export default HomePage;
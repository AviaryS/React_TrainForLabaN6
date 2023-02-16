import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Loading from "../../components/Loading/Loading";

function AlbumPage({favorites, setFavorites}) {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                if (json.length === 0) {
                    setImages(null);
                } else {
                    setImages(json);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (images.length === 0 || loading) {
        return <Loading />;
    }

    function addToFavorites(item) {
        if (favorites.find((x) => x === item) === undefined) {
            setFavorites([...favorites, item]);
        }
    }

    return (
        <div>
            <h3>Картинки</h3>
            <div className="images">
                {images.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.url}/>
                            <br/>
                            <button className='button' onClick={() => addToFavorites(item.url)}>Нравится</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );}

export default AlbumPage;
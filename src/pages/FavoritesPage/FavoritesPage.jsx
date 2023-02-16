import React from 'react';

const FavoritesPage = ({ favorites, setFavorites }) => {
    return (
        <div>
            {favorites.map((favorite) => {
                return (
                    <div>
                        <img src={favorite}/>
                    </div>
                )
            })}
        </div>
    )
};

export default FavoritesPage;
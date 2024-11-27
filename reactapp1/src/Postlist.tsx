import React from 'react';
import {createRoot} from 'react-dom/client'
import { Product } from './Product'
import { App } from './App';
import { useState } from "react"


    const name = "Posts"
    const post = [
        {id: 0, name: 'Post1', author: 'Author1'},
        {id: 1, name: 'Post2', author: 'Author2'},
        {id: 2, name: 'Post3', author: 'Author3'},
        {id: 3, name: 'Post4', author: 'Author4'},
        {id: 4, name: 'Post5', author: 'Author5'}
];
    

const PostList = ({}) => {
    return(
        <div>
            <h1>Hello World</h1>
            <p>It is a text</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg/250px-Two_F-22A_Raptor_in_column_flight_-_%28Noise_reduced%29.jpg" alt=""></img>
            {post.map( (post: { name: string; author: string; }) => {
                return <Product name= {post.name} author={post.author} ></Product>
            }
        )}
        </div>
)}


const ButtonLike = () => {
    const [likes, setLikes] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setLikes(likes + 1);
        setIsLiked(true); 
    };

    return (
        <div>
            <p>Количество лайков: {likes}</p>
            <button onClick={handleLike} disabled={isLiked}>
                {isLiked ? 'Лайк уже поставлен' : 'Лайкнуть'}
                <hr />
            </button>
        </div>
    );
};

export default ButtonLike;


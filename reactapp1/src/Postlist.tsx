import React from 'react';
import {createRoot} from 'react-dom/client'
import { Product } from './Product'
import { App } from './App';
import { useState } from "react"
import './PostList.css'
import { title } from 'process';


    const post = [
        {id: 0, category: 'Gen 4', title: 'Mig-29', Corporation: 'MiG', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuGDwwSq7mfgjuw1dqEpjhS8rGdktxRGsqTA&s'},
        {id: 1, category: 'Gen 3', title: 'B-2 Spirit', Corporation: 'Northrop Grumman', image:'https://upload.wikimedia.org/wikipedia/commons/a/a1/B-2_Spirits_on_Deployment_to_Indo-Asia-Pacific.jpg'},
        {id: 2, category: 'Gen 6', title: 'SR-72',  Corporation: 'Lockheed', image:'https://palmspringsairmuseum.org/wp-content/uploads/2022/07/SR-72-Darkstar.jpg'},
        {id: 3, category: 'Gen 4', title: 'F-16',   Corporation: 'General Dynamics', image:'https://focus.ua/static/storage/thumbs/920x465/d/e5/16693881-945c5f1e95e16439c1713fcbf4dc5e5d.jpg?v=2588_1'},
        {id: 4, category: 'Gen 5', title: 'F-35',   Corporation: 'Lockheed', image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/800px-F-35A_flight_%28cropped%29.jpg'}
];
    

export function ProductsList(){
    const [filteredProducts, setFilteredProducts] = useState(post)
    const [selectedCategory, setSelectedCategory] = useState('All')

    useEffect(()=>{
        if(selectedCategory === 'All'){
            setFilteredProducts(post)
        } else{
            setFilteredProducts(post.filter( (product)=>{
                return product.category === selectedCategory
            }))
        }
        console.log(selectedCategory)
    }, [selectedCategory])

    useEffect(()=>{
        async function getProducts(){
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json()
            setFilteredProducts(products)
        }
        getProducts()
    },[])

    return <div className="product-list">
        <div className="select-category">
        <select onChange={(event)=>{
            setSelectedCategory(event.target.value)
        }
        }>
            <option value = 'All'>All</option>
            <option value = 'Gen 3'>Gen 3</option>
            <option value = 'Gen 4'>Gen 4</option>
            <option value = 'Gen 6'>Gen 6</option>
            <option value = 'Gen 5'>Gen 5</option>
        </select>
        </div>
        <div className="products">
            {filteredProducts.map( (product) => {
                // key - уникальный ключ используется при рендере массивов
                // нужен для идентифицирования reactом элементов которые отображаются
                    // <img src="" alt="" />
                
                return <Product key={product.id} id={product.id} name={product.title} image={product.image} author={''}></Product>
            }
            )}
        </div>
    </div>
}

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

function useEffect(arg0: () => void, arg1: string[]) {
    throw new Error('Function not implemented.');
}


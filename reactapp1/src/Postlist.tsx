import React from 'react';
import {createRoot} from 'react-dom/client'
import { Product } from './Product'
import { App } from './App';
import { useState } from "react"
import './PostList.css'


    const post = [
        {id: 0, category: 'Gen 3', name: 'Mig 21', Corporation: 'MiG', img: 'https://aviamuseum.com.ua/uploads/images/original/e/0/m21-pic_1429203994_1.jpg'},
        {id: 1, category: 'Gen 4', name: 'Mig 29', Corporation: 'MiG', img:'https://www.avianews.com/wp-content/uploads/2022/04/20_mig29_ukraine.jpg'},
        {id: 2, category: 'Gen 6', name: 'SR 72',  Corporation: 'Lockheed', img:'https://palmspringsairmuseum.org/wp-content/uploads/2022/07/SR-72-Darkstar.jpg'},
        {id: 3, category: 'Gen 5', name: 'F 22',   Corporation: 'Lockheed', img:'https://focus.ua/static/storage/thumbs/920x465/d/e5/16693881-945c5f1e95e16439c1713fcbf4dc5e5d.jpg?v=2588_1'},
        {id: 4, category: 'Gen 5', name: 'F 35',   Corporation: 'Lockheed', img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/F-35A_flight_%28cropped%29.jpg/800px-F-35A_flight_%28cropped%29.jpg'}
];
    

export function ProductsList(){
    const [filteredProducts, setFilteredProducts] = useState(post)
    const [selectedCategory, setSelectedCategory] = useState('All')
    // Фильтрация продуктов по выбранной категории при помощи useEffect
    useEffect(()=>{
        // Условие выбора категории
        if(selectedCategory === 'All'){
            setFilteredProducts(post)
            // Переход в выбранную категорию
        } else{
            // Filter cоздаёт новый массив отфильтрованых продуктов по выбранной категории 
            setFilteredProducts(post.filter( (post)=>{
                return post.category === selectedCategory
            }))
        }
        // Отображаем категорию которю выбрали
        console.log(selectedCategory)
    }, [selectedCategory])
    // Отображаем категории списка при помощи option
    return <div className="product-list">
        <select onChange={(event)=>{
            setSelectedCategory(event.target.value)
        }
        }>  
        {/* Создаем список категорий продуктов */}
            <option value = 'All'>All</option>
            <option value = 'Gen 6'>Gen 6</option>
            <option value = 'Gen 4'>Gen 4</option>
            <option value = 'Gen 3'>Gen 3</option>
            <option value = 'Gen 5'>Gen 5</option>
        </select>
        {/* Возвращает массив отфильтрованых продуктов  */}
            {filteredProducts.map( (product) => { 
                // key - уникальный ключ используется при рендере массивов
                // нужен для идентифицирования reactом элементов которые отображаются
                    // <img src="" alt="" />
                
                return <Product key = {product.id} name = {product.name} author = {product.Corporation}></Product>
            }
            )}
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


import React from 'react';
import {createRoot} from 'react-dom/client'
import { App } from './app';
import { Product } from './product';


// Находим HTML-элемент с id "root"
const rootElement = document.getElementById('root') as HTMLElement;

// Создание корневого React-компонента
const root = createRoot(rootElement);

// Отображение компонента App
root.render(<App></App>)
root.render(<Product name={''} price={0} author={''}></Product>)
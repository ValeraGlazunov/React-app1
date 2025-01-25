import { useEffect, useState } from "react"

export interface IPost{
    id: number,
    title: string,
    image: string,
    category: string,
}

export function  usePosts(){
    const [products, setProducts] = useState<IPost[]>([])

    useEffect(()=>{
        async function getProducts(){
            const response = await fetch('https://fakestoreapi.com/products')
            const products = await response.json()
            setProducts(products)
        }
        getProducts()
        
    },[])
    return {products: products}
}
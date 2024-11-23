interface IProductProps {
    name: string,
    price: number,
    author: string,
}

export function Product(props: IProductProps){
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.author}</h2>
            <h3>{props.price}</h3>
        </div>
    )
}
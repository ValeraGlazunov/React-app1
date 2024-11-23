interface IProductProps {
    name: string,
    author: string,
}

export function Product(props: IProductProps){
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.author}</h2>
        </div>
    )
}
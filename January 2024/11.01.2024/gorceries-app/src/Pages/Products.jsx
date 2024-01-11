import { useState } from "react";

export default function Products () {
    const [products, setProducts] = useState([
        { title: "Product 1", price: 19.99, image: "https://cdn.pixabay.com/photo/2021/06/04/06/09/cherries-6308871_1280.jpg" },
        { title: "Product 2", price: 29.99, image: "https://cdn.pixabay.com/photo/2015/02/13/00/43/apples-634572_1280.jpg" },
        { title: "Product 3", price: 39.99, image: "https://cdn.pixabay.com/photo/2020/03/06/16/16/cornflakes-4907490_1280.jpg" },
        { title: "Product 4", price: 49.99, image: "https://cdn.pixabay.com/photo/2021/07/07/13/49/poppies-6394381_1280.jpg" },
        { title: "Product 5", price: 59.99, image: "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_1280.jpg" },
      ]);
    return (
        <>
        <h1>Products:</h1>
        <ol>
            {products.map(({title, price, image}, index) => {
                return <div key={`prod_${index}`}>
                    <h1>{title}</h1>
                    <p>{price}</p>
                    <img className="img-prod" src={image} alt={`${title} image`} />
                </div>
            })};
        </ol>
        </>
        
    )
}
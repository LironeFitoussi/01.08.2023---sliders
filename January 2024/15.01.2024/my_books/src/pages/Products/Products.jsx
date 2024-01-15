import { useEffect, useState } from "react"
import styles from './Products.module.css'
import ProductCard from "../../components/ProductCard/ProductCard"
export default function  Products () {
    const [products, setProducts] = useState([
        {
          title: "Gaming Graphics Card",
          price: 499.99,
          imgSrc: "https://www.bug.co.il/images/site/products/ppf_cbb80a10-1c88-4dee-bf8c-6da394eec424_prvdsk.webp"
        },
        {
          title: "Solid State Drive (SSD)",
          price: 89.99,
          imgSrc: "https://www.ivory.co.il/files/catalog/org/1595318171D71Mg.jpg"
        },
        {
          title: "Mechanical Gaming Keyboard",
          price: 129.99,
          imgSrc: "https://m.media-amazon.com/images/I/8196nDEwHnL.jpg"
        },
        {
          title: "Ultra-Wide Gaming Monitor",
          price: 599.99,
          imgSrc: "https://d2d22nphq0yz8t.cloudfront.net/6cbcadef-96e0-49e9-b3bd-9921afe362db/https://www.payngo.co.il/media/catalog/product/d/x/dxcdfdfz-01.png/w_700,h_700,r_contain"
        },
      ])

      const [product, setProduct] = useState({
        title: '',
        price: '',
        imgSrc: ''
      })

      const handleSubmit = (e) => {
        e.preventDefault();
        setProducts((prevProducts) => [...prevProducts, {...product}]);
        setProduct({
          title: '',
          price: '',
          imgSrc: ''
        });
      };

      const handleChange = (e) => {
        setProduct((prevProduct) => {
          return {
            ...prevProduct,
            [e.target.name]: e.target.value
          }
        })
      };

      const fetchUrl = () => {
        fetch('https://fakestoreapi.com/products')
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setProducts(data)
          .catch(error => {
            console.log(error);
          })
          });
      };

      useEffect(() => {
        fetchUrl()
      }, [])

      return (
        <>
        <h1>Product List</h1>
        <section className={styles.productsContainer}>
            {products.map((product, index) => {
                return (
                    <ProductCard 
                        key={product.title + '_' + index}
                        title={product.title}
                        price={product.price}
                        imgSrc={product.image}
                    />
                )
            })}
        </section>
        <h1>Add a New Product:</h1>
            <form onSubmit={handleSubmit}>
                  <label htmlFor="title">Title</label>
                  <input type="text" name='title' onChange={handleChange} value={product.title}/>

                  <label htmlFor="price">Price</label>
                  <input type="text" name='price' onChange={handleChange} value={product.price}/>

                  <label htmlFor="imgSrc">img Src</label>
                  <input type="text" name='imgSrc' onChange={handleChange} value={product.imgSrc}/>
                  <button type="submit">Submit Book</button>
                </form>
        </>
        
      )
}
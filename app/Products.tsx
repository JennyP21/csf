import Product from './Product';
import { getProducts } from './services/productService';

const Products = async () => {
    const products = await getProducts();
    return (
        <section className='flex flex-col gap-3 mx-20 my-10'>
            <h1 className='text-6xl'>All Products</h1>
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </section>
    )
}

export default Products
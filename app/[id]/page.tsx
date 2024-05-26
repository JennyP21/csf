import { getProduct } from "../services/productService";
import ProductDetails from "./ProductDetails";

const ProductDetailsPage = async ({ params }: { params: { id: string } }) => {
    const product = await getProduct(params.id);
    return (
        <section className="flex items-center justify-center p-10">
            <ProductDetails product={product} />
        </section>
    )
}

export default ProductDetailsPage
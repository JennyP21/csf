import Image from "next/image"
import { ProductI } from "../interface"
import Reviews from "./Reviews"

interface Props {
    product: ProductI
}

const ProductDetails = ({ product }: Props) => {
    return (
        <article className="flex flex-col gap-3 justify-center items-center">
            <div className="mx-auto">
                <Image src={product.image} width={200} height={200} alt={product.title} />
            </div>
            <div className="flex flex-col gap-3">
                <h2 className="font-bold text-xl">
                    {product.title}
                </h2>
                <h2>Category: {product.category}</h2>
                <p className="text-4xl font-semibold">${product.price}</p>
                <p>{product.description}</p>
                <p>{product.rating.rate}/5 | Ratings {product.rating.count}</p>
            </div>
            <Reviews product_id={`${product.id}`} />
        </article>
    )
}

export default ProductDetails
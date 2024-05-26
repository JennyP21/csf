import Image from "next/image";
import Link from "next/link";
import { ProductI } from "./interface";

interface Props {
  product: ProductI
}

const Product = ({ product }: Props) => {
  return (
    <article className="grid grid-cols-[40%_60%] border border-gray-400 p-1">
      <div className="mx-auto">
        <Image src={product.image} width={200} height={200} alt={product.title} />
      </div>
      <div className="flex flex-col gap-3">
        <Link href={`${product.id}`} className="font-bold text-xl hover:underline">
          {product.title}
        </Link>
        <h2>Category: {product.category}</h2>
        <p className="text-4xl font-semibold">${product.price}</p>
      </div>
    </article>
  );
};

export default Product;

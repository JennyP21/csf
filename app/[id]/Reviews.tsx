"use client"
import { useEffect, useState } from "react";
import { ReviewI } from "../interface";
import { getReviewsByProductId } from "../services/reviewService";
import AddReview from "./AddReview";
import ListReviews from "./ListReviews";

const Reviews = ({ product_id }: { product_id: string }) => {
    const [reviews, setReviews] = useState<ReviewI[]>();
    const [active, setActive] = useState(false);

    useEffect(() => {
        const getReviews = async () => {
            const reviews = await getReviewsByProductId(product_id);
            setReviews(reviews);
        }
        getReviews();
    }, [])

    return (
        <div className="w-full">
            <h2 className="text-2xl text-start font-bold">Reviews</h2>
            {!active && <button className="px-2 py-1 bg-blue-400 hover:bg-blue-400/50 rounded-lg m-3" onClick={() => setActive(true)}>Add Review</button>}
            {active && <AddReview product_id={product_id} setActive={setActive} />}
            <ListReviews reviews={reviews || []} />
        </div>
    )
}

export default Reviews
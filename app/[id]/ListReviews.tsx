import React from 'react'
import { ReviewI } from '../interface'

const ListReviews = ({ reviews }: { reviews: ReviewI[] }) => {
    return (
        <section className='border border-gray-300 rounded-xl p-3'>
            {reviews.map(review => (
                <article key={review._id}>
                    <p>{review.review}</p>
                    <p>{review.name} {review.email}</p>
                    <p>Created At: {review.createdAt}</p>
                </article>
            ))}
        </section>
    )
}

export default ListReviews
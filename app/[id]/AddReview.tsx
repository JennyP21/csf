import React, { useState } from 'react';
import { ReviewI } from '../interface';
import { addReview } from '../services/reviewService';

interface Props {
    product_id: string,
    setActive: (value: boolean) => void;
};

const AddReview = ({ product_id, setActive }: Props) => {
    const initialDb = {
        product_id: product_id.toString(),
        name: "",
        email: "",
        review: ""
    };
    const [review, setReview] = useState(initialDb as ReviewI);

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await addReview(review);
        setReview(initialDb as ReviewI);
        setActive(false);
    }

    return (
        <form className='flex flex-col gap-3 p-5 border border-gray-500' onSubmit={(e) => onSubmit(e)}>
            <h4 className='text-lg text-semibold'>Add a review to this product</h4>
            <input
                className='border border-gray-400 rounded-lg p-1.5'
                type='text'
                placeholder='Name'
                required
                onChange={(e) => setReview({ ...review, name: e.target.value })}
            />
            <input
                className='border border-gray-400 rounded-lg p-1.5'
                type='email'
                placeholder='jsmith@example.com'
                required
                onChange={(e) => setReview({ ...review, email: e.target.value })}
            />
            <textarea
                className='border border-gray-400 rounded-lg p-1.5'
                placeholder='Write your review here.'
                required
                minLength={5}
                maxLength={300}
                onChange={(e) => setReview({ ...review, review: e.target.value })}
            />
            <div className='flex gap-3'>
                <button className='px-2 py-1 bg-blue-400 hover:bg-blue-400/50 rounded-lg' type='submit'>Add</button>
                <button className='px-2 py-1 bg-gray-300 hover:bg-gray-300/50 rounded-lg' type='reset' onClick={() => setActive(false)}>Cancel</button>
            </div>
        </form>
    )
}

export default AddReview
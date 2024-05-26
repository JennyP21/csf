export interface ProductI {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: RatingI;
}

interface RatingI {
  rate: number;
  count: 259;
}

export interface ReviewI {
  _id: string;
  product_id: string;
  name: string;
  email: string;
  review: string;
  createdAt: string;
  updatedAt: string;
}

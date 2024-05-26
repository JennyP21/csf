import { REVIEW_BASE_URL } from "../constants";
import { ReviewI } from "../interface";
import httpService from "./httpService";

export async function getReviewsByProductId(
  product_id: string
) {
  const reviews = (
    await httpService.get(REVIEW_BASE_URL + product_id)
  ).data;
  return reviews;
}

export async function addReview(review: ReviewI) {
  const newReview: ReviewI = (
    await httpService.post(REVIEW_BASE_URL, review)
  ).data;
  return newReview;
}

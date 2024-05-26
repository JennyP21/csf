import { PRODUCT_BASE_URL } from "../constants";
import { ProductI } from "../interface";
import httpService from "./httpService";

const url = PRODUCT_BASE_URL + "products";
export async function getProducts() {
  const data = (await httpService.get(url + "?limit=5"))
    .data as ProductI[];
  return data;
}

export async function getProduct(id: string) {
  const data = (await httpService.get(url + "/" + id))
    .data as ProductI;
  return data;
}

import dataJson from "./data.json";
const OFFLINE_MODE = false;

export async function getProducts() {
  if (OFFLINE_MODE) {
    return dataJson;
  }
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log(error);
  }
}

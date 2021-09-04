import axios, { AxiosResponse } from "axios";
import { Cars } from "../types";

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string): Promise<any> {
  const requestUrl = getStrapiURL(path);
  const { data } = await axios.get(requestUrl);
  console.log(data);
  return data;
}

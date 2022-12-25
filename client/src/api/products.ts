import axios from "axios"

export interface Product {
  ID: number
  name: string
  section: string
  make: string
  description: string
  price: number
  image: string
}

export const getProducts = async () => {
  const url = "/products"
  const resp = await axios.get(url)
  return await resp.data
}

export const getProductsBySection = async () => {
  const url = "/products/sections"
  const resp = await axios.get(url)
  return await resp.data
}

export const createProduct = async (product: any) => {
  const url = `/products`
  const resp = await axios.post(url, product)
  return await resp.data
}

export const editProduct = async (id: number, product: Product) => {
  const url = `/products?id=${id}`
  const resp = await axios.put(url, product)
  return await resp.data
}

export const deleteProduct = async (id: number) => {
  const url = `/products?id=${id}`
  const resp = await axios.delete(url)
  return resp.data
}
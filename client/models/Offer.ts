import Product from "./Product"
import Client from "./Client"

export default interface Offer {
  date: string
  to: Client
  title: string
  content: string
  products: Product[]
}
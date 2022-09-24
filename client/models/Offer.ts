import Item from "./Item"
import Client from "./Client"

export default interface Offer {
  date: string
  to: Client
  title: string
  content: string
  items: Item[]
}
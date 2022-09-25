import Product from "./Product";
import Client from "./Client";
import { Rows } from "../data/fake_products";

export default interface Offer {
  date: string;
  to: Client;
  title: string;
  content: string;
  products: Rows;
}

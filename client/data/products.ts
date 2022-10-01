import { faker } from "@faker-js/faker";
import { Product } from "../models/product";

export interface ProductRow extends Product {
  quantity: number;
}

export const createData = (): ProductRow[] => {
  let items: ProductRow[] = [];
  const n = faker.datatype.number({ min: 1, max: 10 });
  for (let i = 0; i < n; i++) {
    const r: ProductRow = {
      image: faker.image.technics(30, 30, true),
      make: faker.company.name(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseInt(faker.commerce.price(10, 2000)),
      quantity: faker.datatype.number({ min: 1, max: 10 }),
    };
    items.push(r);
  }
  return items;
};

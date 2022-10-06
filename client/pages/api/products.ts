// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { faker } from "@faker-js/faker";
import { Product } from "../../models/product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  let items: Product[] = [];
  const n = faker.datatype.number({ min: 1, max: 10 });
  for (let i = 0; i < n; i++) {
    const product = {
      image: faker.image.technics(30, 30, true),
      make: faker.company.name(),
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: parseInt(faker.commerce.price(10, 2000)),
    };
    items.push(product);
  }
  res.status(200).json(items);
}

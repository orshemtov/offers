// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "../../models/client";

type Data = Client[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let items: Client[] = [];
  const n = faker.datatype.number({ min: 1, max: 10 });
  for (let i = 0; i < n; i++) {
    const r: Client = {
      name: faker.name.fullName(),
      company: faker.company.name(),
      address: faker.commerce.productName(),
      phone: faker.commerce.productDescription(),
      email: faker.internet.email(),
    };
    items.push(r);
  }

  res.status(200).json(items);
}

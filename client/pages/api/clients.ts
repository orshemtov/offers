// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { faker } from "@faker-js/faker";
import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "../../models/client";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Client[]>
) {
  let items: Client[] = [];
  const n = faker.datatype.number({ min: 1, max: 10 });
  for (let i = 0; i < n; i++) {
    const client = {
      name: faker.name.fullName(),
      company: faker.company.name(),
      address: faker.commerce.productName(),
      phone: faker.commerce.productDescription(),
      email: faker.internet.email(),
    };
    items.push(client);
  }

  res.status(200).json(items);
}

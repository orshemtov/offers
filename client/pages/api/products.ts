// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { faker } from "@faker-js/faker";
import { Product } from "../../models/product";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[]>
) {
  switch (req.method) {
    case "GET":
      res.status(200)
      break
    case "POST":
      res.status(201)
      break
    case "PUT":
      res.status(201)
      break
    case "DELETE":
      res.status(204)
  }
}

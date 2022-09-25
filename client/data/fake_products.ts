import { faker } from "@faker-js/faker"

export interface Row {
  id: number
  image: string
  name: string
  price: number
  quantity: number
}

export type Rows = Row[]

export const createData = (): Rows => {
  let items: Rows = []
  const n = faker.datatype.number({ min: 1, max: 10 })
  for (let i = 0; i < n; i++) {
    const row: Row = {
      id: i,
      image: faker.image.technics(30, 30, true),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(10, 2000)),
      quantity: faker.datatype.number({ min: 1, max: 10 })
    }
    items.push(row)
  }
  return items
}
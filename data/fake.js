const { faker } = require("@faker-js/faker")
const fs = require("fs")

let clients = []

for (let i = 0; i < 20; i++) {
  const client = {
    name: faker.name.fullName(),
    company: faker.company.name(),
    address: faker.address.streetAddress(true),
    phone: faker.phone.number(faker.phone.phoneNumberFormat()),
    email: faker.internet.email(),
  }
  clients.push(client)
}

fs.writeFileSync("clients.json", JSON.stringify(clients))

let products = []

for (let i = 0; i < 20; i++) {
  const product = {
    name: faker.commerce.productName(),
    make: faker.company.name(),
    description: faker.commerce.productDescription(),
    price: parseFloat(faker.commerce.price()),
    image: faker.image.business(),
  }
  products.push(product)
}

fs.writeFileSync("products.json", JSON.stringify(products))
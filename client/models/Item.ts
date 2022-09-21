export interface Item {
  name: string;
  description: string;
  price: number;
  image: string;
}

export function instanceOfItem(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && "name" in value
  isInstance = isInstance && "description" in value
  isInstance = isInstance && "price" in value
  isInstance = isInstance && "image" in value

  return isInstance
}

export function ItemFromJSON(json: any): Item {
  return ItemFromJSONTyped(json, false)
}

export function ItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): Item {
  if ((json === undefined) || (json === null)) {
    return json
  }
  return {

    "name": json["name"],
    "description": json["description"],
    "price": json["price"],
    "image": json["image"]
  }
}

export function ItemToJSON(value?: Item | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {

    "name": value.name,
    "description": value.description,
    "price": value.price,
    "image": value.image
  }
}


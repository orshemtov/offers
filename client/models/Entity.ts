export interface Entity {
  name: string;
  address: string;
  phone: string;
  email: string;
}

export function instanceOfEntity(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && "name" in value
  isInstance = isInstance && "address" in value
  isInstance = isInstance && "phone" in value
  isInstance = isInstance && "email" in value

  return isInstance
}

export function EntityFromJSON(json: any): Entity {
  return EntityFromJSONTyped(json, false)
}

export function EntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): Entity {
  if ((json === undefined) || (json === null)) {
    return json
  }
  return {

    "name": json["name"],
    "address": json["address"],
    "phone": json["phone"],
    "email": json["email"]
  }
}

export function EntityToJSON(value?: Entity | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {

    "name": value.name,
    "address": value.address,
    "phone": value.phone,
    "email": value.email
  }
}


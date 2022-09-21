import type { Entity } from "./Entity"
import type { Item } from "./Item"
import { ItemFromJSON, ItemToJSON } from "./Item"

export interface Offer {
  logo: string;
  date: string;
  to: Entity;
  from: Entity;
  title: string;
  content: string;
  items: Array<Item>;
}

export function instanceOfOffer(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && "logo" in value
  isInstance = isInstance && "date" in value
  isInstance = isInstance && "to" in value
  isInstance = isInstance && "from" in value
  isInstance = isInstance && "title" in value
  isInstance = isInstance && "content" in value
  isInstance = isInstance && "items" in value

  return isInstance
}

export function OfferFromJSON(json: any): Offer {
  return OfferFromJSONTyped(json, false)
}

export function OfferFromJSONTyped(json: any, ignoreDiscriminator: boolean): Offer {
  if ((json === undefined) || (json === null)) {
    return json
  }
  return {

    "logo": json["logo"],
    "date": json["date"],
    "to": json["to"],
    "from": json["from"],
    "title": json["title"],
    "content": json["content"],
    "items": ((json["items"] as Array<any>).map(ItemFromJSON))
  }
}

export function OfferToJSON(value?: Offer | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {

    "logo": value.logo,
    "date": value.date,
    "to": value.to,
    "from": value.from,
    "title": value.title,
    "content": value.content,
    "items": ((value.items as Array<any>).map(ItemToJSON))
  }
}


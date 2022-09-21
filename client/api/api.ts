import * as runtime from "../runtime"
import type { Item, Offer } from "../models"
import { ItemFromJSON, ItemToJSON, OfferFromJSON, OfferToJSON } from "../models"

export interface ImagesPostRequest {
  requestBody?: Array<string>;
}

export interface ItemsItemIdDeleteRequest {
  itemId: string;
}

export interface ItemsItemIdGetRequest {
  itemId: string;
}

export interface ItemsItemIdPutRequest {
  itemId: string;
  item: Item;
}

export interface ItemsPostRequest {
  item: Item;
}

export interface OffersOfferIdGetRequest {
  offerId: string;
}

export interface OffersOfferIdPutRequest {
  offerId: string;
  offer: Offer;
}

export interface OffersPostRequest {
  offer: Offer;
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {

  async imagesPostRaw(requestParameters: ImagesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters["Content-Type"] = "application/json"

    const response = await this.request({
      path: `/images`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: requestParameters.requestBody
    }, initOverrides)

    return new runtime.VoidApiResponse(response)
  }

  async imagesPost(requestParameters: ImagesPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
    await this.imagesPostRaw(requestParameters, initOverrides)
  }

  async itemsGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Item>>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/items`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides)

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ItemFromJSON))
  }

  async itemsGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Item>> {
    const response = await this.itemsGetRaw(initOverrides)
    return await response.value()
  }

  async itemsItemIdDeleteRaw(requestParameters: ItemsItemIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
    if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
      throw new runtime.RequiredError("itemId", "Required parameter requestParameters.itemId was null or undefined when calling itemsItemIdDelete.")
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/items/{itemId}`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
      method: "DELETE",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides)

    return new runtime.VoidApiResponse(response)
  }

  async itemsItemIdDelete(requestParameters: ItemsItemIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
    await this.itemsItemIdDeleteRaw(requestParameters, initOverrides)
  }

  async itemsItemIdGetRaw(requestParameters: ItemsItemIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Item>> {
    if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
      throw new runtime.RequiredError("itemId", "Required parameter requestParameters.itemId was null or undefined when calling itemsItemIdGet.")
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/items/{itemId}`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides)

    return new runtime.JSONApiResponse(response, (jsonValue) => ItemFromJSON(jsonValue))
  }

  async itemsItemIdGet(requestParameters: ItemsItemIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Item> {
    const response = await this.itemsItemIdGetRaw(requestParameters, initOverrides)
    return await response.value()
  }

  async itemsItemIdPutRaw(requestParameters: ItemsItemIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Item>> {
    if (requestParameters.itemId === null || requestParameters.itemId === undefined) {
      throw new runtime.RequiredError("itemId", "Required parameter requestParameters.itemId was null or undefined when calling itemsItemIdPut.")
    }

    if (requestParameters.item === null || requestParameters.item === undefined) {
      throw new runtime.RequiredError("item", "Required parameter requestParameters.item was null or undefined when calling itemsItemIdPut.")
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters["Content-Type"] = "application/json"

    const response = await this.request({
      path: `/items/{itemId}`.replace(`{${"itemId"}}`, encodeURIComponent(String(requestParameters.itemId))),
      method: "PUT",
      headers: headerParameters,
      query: queryParameters,
      body: ItemToJSON(requestParameters.item)
    }, initOverrides)

    return new runtime.JSONApiResponse(response, (jsonValue) => ItemFromJSON(jsonValue))
  }

  async itemsItemIdPut(requestParameters: ItemsItemIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Item> {
    const response = await this.itemsItemIdPutRaw(requestParameters, initOverrides)
    return await response.value()
  }

  async itemsPostRaw(requestParameters: ItemsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Item>> {
    if (requestParameters.item === null || requestParameters.item === undefined) {
      throw new runtime.RequiredError("item", "Required parameter requestParameters.item was null or undefined when calling itemsPost.")
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters["Content-Type"] = "application/json"

    const response = await this.request({
      path: `/items`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: ItemToJSON(requestParameters.item)
    }, initOverrides)

    return new runtime.JSONApiResponse(response, (jsonValue) => ItemFromJSON(jsonValue))
  }

  async itemsPost(requestParameters: ItemsPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Item> {
    const response = await this.itemsPostRaw(requestParameters, initOverrides)
    return await response.value()
  }

  async offersGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Offer>>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/offers`,
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides)

    return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OfferFromJSON))
  }

  async offersGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Offer>> {
    const response = await this.offersGetRaw(initOverrides)
    return await response.value()
  }

  async offersOfferIdGetRaw(requestParameters: OffersOfferIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Offer>> {
    if (requestParameters.offerId === null || requestParameters.offerId === undefined) {
      throw new runtime.RequiredError("offerId", "Required parameter requestParameters.offerId was null or undefined when calling offersOfferIdGet.")
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request({
      path: `/offers/{offerId}`.replace(`{${"offerId"}}`, encodeURIComponent(String(requestParameters.offerId))),
      method: "GET",
      headers: headerParameters,
      query: queryParameters
    }, initOverrides)

    return new runtime.JSONApiResponse(response, (jsonValue) => OfferFromJSON(jsonValue))
  }

  async offersOfferIdGet(requestParameters: OffersOfferIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Offer> {
    const response = await this.offersOfferIdGetRaw(requestParameters, initOverrides)
    return await response.value()
  }

  async offersOfferIdPutRaw(requestParameters: OffersOfferIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Offer>> {
    if (requestParameters.offerId === null || requestParameters.offerId === undefined) {
      throw new runtime.RequiredError("offerId", "Required parameter requestParameters.offerId was null or undefined when calling offersOfferIdPut.")
    }

    if (requestParameters.offer === null || requestParameters.offer === undefined) {
      throw new runtime.RequiredError("offer", "Required parameter requestParameters.offer was null or undefined when calling offersOfferIdPut.")
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters["Content-Type"] = "application/json"

    const response = await this.request({
      path: `/offers/{offerId}`.replace(`{${"offerId"}}`, encodeURIComponent(String(requestParameters.offerId))),
      method: "PUT",
      headers: headerParameters,
      query: queryParameters,
      body: OfferToJSON(requestParameters.offer)
    }, initOverrides)

    return new runtime.JSONApiResponse(response, (jsonValue) => OfferFromJSON(jsonValue))
  }

  async offersOfferIdPut(requestParameters: OffersOfferIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Offer> {
    const response = await this.offersOfferIdPutRaw(requestParameters, initOverrides)
    return await response.value()
  }

  async offersPostRaw(requestParameters: OffersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Offer>> {
    if (requestParameters.offer === null || requestParameters.offer === undefined) {
      throw new runtime.RequiredError("offer", "Required parameter requestParameters.offer was null or undefined when calling offersPost.")
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters["Content-Type"] = "application/json"

    const response = await this.request({
      path: `/offers`,
      method: "POST",
      headers: headerParameters,
      query: queryParameters,
      body: OfferToJSON(requestParameters.offer)
    }, initOverrides)

    return new runtime.JSONApiResponse(response, (jsonValue) => OfferFromJSON(jsonValue))
  }

  async offersPost(requestParameters: OffersPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Offer> {
    const response = await this.offersPostRaw(requestParameters, initOverrides)
    return await response.value()
  }

}

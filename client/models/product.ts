/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "offers";

export interface Product {
  name: string;
  make: string;
  description: string;
  price: number;
  image: string;
}

function createBaseProduct(): Product {
  return { name: "", make: "", description: "", price: 0, image: "" };
}

export const Product = {
  encode(message: Product, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.make !== "") {
      writer.uint32(18).string(message.make);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    if (message.price !== 0) {
      writer.uint32(33).double(message.price);
    }
    if (message.image !== "") {
      writer.uint32(42).string(message.image);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Product {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProduct();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.make = reader.string();
          break;
        case 3:
          message.description = reader.string();
          break;
        case 4:
          message.price = reader.double();
          break;
        case 5:
          message.image = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Product {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      make: isSet(object.make) ? String(object.make) : "",
      description: isSet(object.description) ? String(object.description) : "",
      price: isSet(object.price) ? Number(object.price) : 0,
      image: isSet(object.image) ? String(object.image) : "",
    };
  },

  toJSON(message: Product): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.make !== undefined && (obj.make = message.make);
    message.description !== undefined && (obj.description = message.description);
    message.price !== undefined && (obj.price = message.price);
    message.image !== undefined && (obj.image = message.image);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Product>, I>>(object: I): Product {
    const message = createBaseProduct();
    message.name = object.name ?? "";
    message.make = object.make ?? "";
    message.description = object.description ?? "";
    message.price = object.price ?? 0;
    message.image = object.image ?? "";
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

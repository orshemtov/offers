/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "offers";

export interface Client {
  name: string;
  company: string;
  address: string;
  phone: string;
  email: string;
}

function createBaseClient(): Client {
  return { name: "", company: "", address: "", phone: "", email: "" };
}

export const Client = {
  encode(message: Client, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.company !== "") {
      writer.uint32(18).string(message.company);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    if (message.phone !== "") {
      writer.uint32(34).string(message.phone);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Client {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.company = reader.string();
          break;
        case 3:
          message.address = reader.string();
          break;
        case 4:
          message.phone = reader.string();
          break;
        case 5:
          message.email = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Client {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      company: isSet(object.company) ? String(object.company) : "",
      address: isSet(object.address) ? String(object.address) : "",
      phone: isSet(object.phone) ? String(object.phone) : "",
      email: isSet(object.email) ? String(object.email) : "",
    };
  },

  toJSON(message: Client): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.company !== undefined && (obj.company = message.company);
    message.address !== undefined && (obj.address = message.address);
    message.phone !== undefined && (obj.phone = message.phone);
    message.email !== undefined && (obj.email = message.email);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Client>, I>>(object: I): Client {
    const message = createBaseClient();
    message.name = object.name ?? "";
    message.company = object.company ?? "";
    message.address = object.address ?? "";
    message.phone = object.phone ?? "";
    message.email = object.email ?? "";
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

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "simple";

export interface Simple {
  name: string;
  age?: number | undefined;
  createdAt?: Date | undefined;
  hyphen: string;
  spaces: string;
  dollarStart: string;
  dollarEnd: string;
  hyphenList: string[];
}

function createBaseSimple(): Simple {
  return {
    name: "",
    age: undefined,
    createdAt: undefined,
    hyphen: "",
    spaces: "",
    dollarStart: "",
    dollarEnd: "",
    hyphenList: [],
  };
}

export const Simple = {
  encode(message: Simple, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.age !== undefined) {
      writer.uint32(16).int32(message.age);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(74).fork()).ldelim();
    }
    if (message.hyphen !== "") {
      writer.uint32(26).string(message.hyphen);
    }
    if (message.spaces !== "") {
      writer.uint32(34).string(message.spaces);
    }
    if (message.dollarStart !== "") {
      writer.uint32(42).string(message.dollarStart);
    }
    if (message.dollarEnd !== "") {
      writer.uint32(50).string(message.dollarEnd);
    }
    for (const v of message.hyphenList) {
      writer.uint32(58).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Simple {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSimple();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.age = reader.int32();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.hyphen = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.spaces = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.dollarStart = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.dollarEnd = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.hyphenList.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Simple {
    return {
      name: isSet(object.other_name) ? String(object.other_name) : "",
      age: isSet(object.other_age) ? Number(object.other_age) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      hyphen: isSet(object["hyphened-name"]) ? String(object["hyphened-name"]) : "",
      spaces: isSet(object["name with spaces"]) ? String(object["name with spaces"]) : "",
      dollarStart: isSet(object.$dollar) ? String(object.$dollar) : "",
      dollarEnd: isSet(object.dollar$) ? String(object.dollar$) : "",
      hyphenList: Array.isArray(object?.["hyphen-list"]) ? object["hyphen-list"].map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Simple): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.other_name = message.name;
    }
    if (message.age !== undefined) {
      obj.other_age = Math.round(message.age);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.hyphen !== "") {
      obj["hyphened-name"] = message.hyphen;
    }
    if (message.spaces !== "") {
      obj["name with spaces"] = message.spaces;
    }
    if (message.dollarStart !== "") {
      obj.$dollar = message.dollarStart;
    }
    if (message.dollarEnd !== "") {
      obj.dollar$ = message.dollarEnd;
    }
    if (message.hyphenList?.length) {
      obj["hyphen-list"] = message.hyphenList;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Simple>, I>>(base?: I): Simple {
    return Simple.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Simple>, I>>(object: I): Simple {
    const message = createBaseSimple();
    message.name = object.name ?? "";
    message.age = object.age ?? undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.hyphen = object.hyphen ?? "";
    message.spaces = object.spaces ?? "";
    message.dollarStart = object.dollarStart ?? "";
    message.dollarEnd = object.dollarEnd ?? "";
    message.hyphenList = object.hyphenList?.map((e) => e) || [];
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000;
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

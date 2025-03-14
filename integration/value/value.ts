/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { ListValue, Struct, Value } from "./google/protobuf/struct";
import { StringValue } from "./google/protobuf/wrappers";

export const protobufPackage = "";

export interface ValueMessage {
  value: any | undefined;
  anyList: Array<any> | undefined;
  repeatedAny: any[];
  repeatedStrings: string[];
  structValue: { [key: string]: any } | undefined;
}

function createBaseValueMessage(): ValueMessage {
  return { value: undefined, anyList: undefined, repeatedAny: [], repeatedStrings: [], structValue: undefined };
}

export const ValueMessage = {
  encode(message: ValueMessage, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== undefined) {
      Value.encode(Value.wrap(message.value), writer.uint32(10).fork()).ldelim();
    }
    if (message.anyList !== undefined) {
      ListValue.encode(ListValue.wrap(message.anyList), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.repeatedAny) {
      Value.encode(Value.wrap(v!), writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.repeatedStrings) {
      StringValue.encode({ value: v!! }, writer.uint32(34).fork()).ldelim();
    }
    if (message.structValue !== undefined) {
      Struct.encode(Struct.wrap(message.structValue), writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ValueMessage {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseValueMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.anyList = ListValue.unwrap(ListValue.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.repeatedAny.push(Value.unwrap(Value.decode(reader, reader.uint32())));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.repeatedStrings.push(StringValue.decode(reader, reader.uint32()).value);
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.structValue = Struct.unwrap(Struct.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ValueMessage {
    return {
      value: isSet(object?.value) ? object.value : undefined,
      anyList: Array.isArray(object.anyList) ? [...object.anyList] : undefined,
      repeatedAny: Array.isArray(object?.repeatedAny) ? [...object.repeatedAny] : [],
      repeatedStrings: Array.isArray(object?.repeatedStrings) ? object.repeatedStrings.map((e: any) => String(e)) : [],
      structValue: isObject(object.structValue) ? object.structValue : undefined,
    };
  },

  toJSON(message: ValueMessage): unknown {
    const obj: any = {};
    if (message.value !== undefined) {
      obj.value = message.value;
    }
    if (message.anyList !== undefined) {
      obj.anyList = message.anyList;
    }
    if (message.repeatedAny?.length) {
      obj.repeatedAny = message.repeatedAny;
    }
    if (message.repeatedStrings?.length) {
      obj.repeatedStrings = message.repeatedStrings;
    }
    if (message.structValue !== undefined) {
      obj.structValue = message.structValue;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ValueMessage>, I>>(base?: I): ValueMessage {
    return ValueMessage.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ValueMessage>, I>>(object: I): ValueMessage {
    const message = createBaseValueMessage();
    message.value = object.value ?? undefined;
    message.anyList = object.anyList ?? undefined;
    message.repeatedAny = object.repeatedAny?.map((e) => e) || [];
    message.repeatedStrings = object.repeatedStrings?.map((e) => e) || [];
    message.structValue = object.structValue ?? undefined;
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

function isObject(value: any): boolean {
  return typeof value === "object" && value !== null;
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

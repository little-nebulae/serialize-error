import type { BaseErrorType } from "@little-nebulae/error";
import type { OmitKnownKeys } from "@little-nebulae/type-utils";
import type { JSONType } from "zod";

export type ErrorObjectMeta = Record<string, JSONType> | null;

export interface FlatErrorObject<
  TCode extends string,
  TMeta extends ErrorObjectMeta = null,
> extends Pick<BaseErrorType<TCode>, "name" | "message" | "code"> {
  meta: TMeta;
}

export interface NestedErrorObject<
  TCode extends string,
  TMeta extends ErrorObjectMeta = null,
> extends OmitKnownKeys<BaseErrorType<TCode>, "cause" | "meta"> {
  cause: JSONType;
  meta: TMeta;
}

import type { BaseErrorType } from "@little-nebulae/error";
import type { JSONType } from "zod";

export type ErrorObjectMeta = Record<string, JSONType> | null;

export interface FlatErrorObject<
  TCode extends string,
  TMeta extends ErrorObjectMeta = null,
> extends Pick<BaseErrorType<TCode>, "name" | "message" | "code"> {
  meta: TMeta;
}

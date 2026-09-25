import type { BaseErrorType } from "@little-nebulae/error";
import type { Options } from "serialize-error";

import { serializeError } from "serialize-error";

import type {
  ErrorObjectMeta,
  FlatErrorObject,
  NestedErrorObject,
} from "@/types";

export function serializeErrorShallowly<
  TCode extends string,
  TMeta extends ErrorObjectMeta,
>({
  error,
  meta,
}: {
  error: BaseErrorType<TCode>;
  meta: TMeta;
}): FlatErrorObject<TCode, TMeta> {
  return {
    name: error.name,
    message: error.message,
    code: error.code,
    meta,
  };
}

export function serializeErrorDeeply<
  TCode extends string,
  TMeta extends ErrorObjectMeta,
>(
  {
    error,
    meta,
  }: {
    error: BaseErrorType<TCode>;
    meta: TMeta;
  },
  options: Options = {},
): NestedErrorObject<TCode, TMeta> {
  const { maxDepth = 50, useToJSON } = options;
  const errorObject = serializeError(error, {
    maxDepth,
    useToJSON,
  }) as unknown as NestedErrorObject<TCode, TMeta>;
  errorObject.meta = meta;
  return errorObject;
}

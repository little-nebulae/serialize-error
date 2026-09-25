import type { BaseErrorType } from "@little-nebulae/error";

import type { ErrorObjectMeta } from "@/schemas";
import type { FlatErrorObject } from "@/types";

import { ErrorObjectMetaSchema } from "@/schemas";

export function serializeErrorShallowly<
  TCode extends string,
  TMeta extends ErrorObjectMeta = null,
>({ error }: { error: BaseErrorType<TCode> }): FlatErrorObject<TCode, TMeta> {
  const meta = ErrorObjectMetaSchema.parse(error.meta) as TMeta;

  return {
    name: error.name,
    message: error.message,
    code: error.code,
    meta,
  };
}

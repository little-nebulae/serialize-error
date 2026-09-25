import type { BaseErrorType } from "@little-nebulae/error";

import type { ErrorObjectMeta, FlatErrorObject } from "@/types";

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

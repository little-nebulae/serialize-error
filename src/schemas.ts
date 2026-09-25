import { z } from "zod";

export const ErrorObjectMetaSchema = z.record(z.string(), z.json()).nullable();
export type ErrorObjectMeta = z.infer<typeof ErrorObjectMetaSchema>;

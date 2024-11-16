import { clientHc } from "./client";

export type Hc = ReturnType<typeof clientHc>;

export type HcResponse<
  T,
  Method extends keyof T & ("$get" | "$post" | "$put" | "$delete"),
> = Method extends "$get"
  ? T extends {
      $get: (...args: any[]) => Promise<{ json(): Promise<infer U> }>;
    }
    ? U
    : never
  : Method extends "$post"
    ? T extends {
        $post: (...args: any[]) => Promise<{ json(): Promise<infer U> }>;
      }
      ? U
      : never
    : Method extends "$put"
      ? T extends {
          $put: (...args: any[]) => Promise<{ json(): Promise<infer U> }>;
        }
        ? U
        : never
      : Method extends "$delete"
        ? T extends {
            $delete: (...args: any[]) => Promise<{ json(): Promise<infer U> }>;
          }
          ? U
          : never
        : never;

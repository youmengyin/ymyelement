import { Rules, Values } from "async-validator";
import { InjectionKey } from "vue";

export type FormData = {
  model: Record<string, unknown>;
  rules?: Rules
}
export type FormItem = {
  validate: () => Promise<Values>;
};

export type FormType = {
  validate: (callback: (isValid: boolean) => void) => void;
}

export const key: InjectionKey<FormData> = Symbol("form-data");

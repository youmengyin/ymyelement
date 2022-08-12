import type { InjectionKey } from "vue";
import type { Rules, Values } from "async-validator";
export type Arrayable<T> = T | T[]

export type FormContext = {
    model: Record<string, unknown>;
    rules?: Rules
}
export type FormItemContext = {
    validate: () => Promise<Values>;
  };

export type FormType = {
    validate: (callback: (isValid: boolean) => void) => void;
  }

export const formContextKey : InjectionKey<FormContext> = Symbol('formContextKey');
export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey');

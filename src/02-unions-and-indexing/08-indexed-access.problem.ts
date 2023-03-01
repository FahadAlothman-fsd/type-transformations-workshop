import { Equal, Expect } from "../helpers/type-utils";

export const fakeDataDefaults = {
  String: "Default string",
  Int: 1,
  Float: 1.14,
  Boolean: true,
  ID: "id",
};

export type fakeDataDefaultsType = typeof fakeDataDefaults;
export type StringType = fakeDataDefaultsType["String"];
export type IntType = fakeDataDefaultsType["Int"];
export type FloatType = fakeDataDefaultsType["Float"];
export type BooleanType = fakeDataDefaultsType["Boolean"];
export type IDType = fakeDataDefaultsType["ID"];

type tests = [
  Expect<Equal<StringType, string>>,
  Expect<Equal<IntType, number>>,
  Expect<Equal<FloatType, number>>,
  Expect<Equal<BooleanType, boolean>>,
  Expect<Equal<IDType, string>>
];

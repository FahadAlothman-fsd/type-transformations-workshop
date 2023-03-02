import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type GetType<T> = T extends Exclude<Fruit, "orange"> ? T : never;

type AppleOrBanana = GetType<Fruit>;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];

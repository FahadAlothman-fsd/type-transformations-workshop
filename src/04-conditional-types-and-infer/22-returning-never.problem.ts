import { Equal, Expect } from "../helpers/type-utils";

type YouSayGoodbyeAndISayHello<T> = T extends "hello"
  ? "goodbye"
  : T extends "goodbye"
  ? "hello"
  : never;

// alternatively

type YouSayGoodbyeAndISayHello2<T> = T extends "hello" | "goodbye"
  ? T extends "goodbye"
    ? "hello"
    : "goodbye"
  : never;

type tests = [
  Expect<Equal<YouSayGoodbyeAndISayHello<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello<1>, never>>,
  // alternative test
  Expect<Equal<YouSayGoodbyeAndISayHello2<"hello">, "goodbye">>,
  Expect<Equal<YouSayGoodbyeAndISayHello2<"goodbye">, "hello">>,
  Expect<Equal<YouSayGoodbyeAndISayHello2<"alright pal">, never>>,
  Expect<Equal<YouSayGoodbyeAndISayHello2<1>, never>>
];

import { S } from "ts-toolbelt";
import { Equal, Expect } from "../helpers/type-utils";

type Names = [
  "Matt Pocock",
  "Jimi Hendrix",
  "Eric Clapton",
  "John Mayer",
  "BB King"
];

type GetSurname<T> = T extends `${infer FirstName} ${infer Surname}`
  ? Surname
  : never;

// alternatively
type GetLastname<T extends string> = S.Split<T, " ">[1];

type tests = [
  Expect<Equal<GetSurname<Names[0]>, "Pocock">>,
  Expect<Equal<GetSurname<Names[1]>, "Hendrix">>,
  Expect<Equal<GetSurname<Names[2]>, "Clapton">>,
  Expect<Equal<GetSurname<Names[3]>, "Mayer">>,
  Expect<Equal<GetSurname<Names[4]>, "King">>,
  // alternatively
  Expect<Equal<GetLastname<Names[0]>, "Pocock">>,
  Expect<Equal<GetLastname<Names[1]>, "Hendrix">>,
  Expect<Equal<GetLastname<Names[2]>, "Clapton">>,
  Expect<Equal<GetLastname<Names[3]>, "Mayer">>,
  Expect<Equal<GetLastname<Names[4]>, "King">>
];

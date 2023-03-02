import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> = T extends () => infer functionResult
  ? functionResult
  : T extends { parse: () => infer parseResult }
  ? parseResult
  : T extends { extract: () => infer extractResult }
  ? extractResult
  : never;

// alternatively
type GetParserResult2<T> = T extends
  | { parse: () => infer Result }
  | { extract: () => infer Result }
  | (() => infer Result)
  ? Result
  : never;

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
  // alternatively
  Expect<Equal<GetParserResult2<typeof parser1>, number>>,
  Expect<Equal<GetParserResult2<typeof parser2>, string>>,
  Expect<Equal<GetParserResult2<typeof parser3>, boolean>>
];

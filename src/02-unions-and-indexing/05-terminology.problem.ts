/**
 * It's important to understand the terminology around unions:
 *
 * One of the type declarations below is a union.
 * One of the type declarations below is a discriminated union.
 * One of the type declarations below is an enum.
 *
 * Which is which?
 */

// A is a discriminated union
type A =
  | {
      type: "a";
      a: string;
    }
  | {
      type: "b";
      b: string;
    }
  | {
      type: "c";
      c: string;
    };

// B is a union
type B = "a" | "b" | "c";

// C is an enum
enum C {
  A = "a",
  B = "b",
  C = "c",
}

export {};

# `@lucid-softworks/is-boolean`

Check for the primitive values `true` and `false`, narrowing unknown input to
`boolean`.

```ts
import { isBoolean } from "@lucid-softworks/is-boolean";

if (isBoolean(value)) {
  value satisfies boolean;
}
```

import { main } from "./";

describe("Main", () => {
  test("returns body", async () => {
    expect(await main({ foo: "bar" }, {})).toEqual({
      message: "ok"
    });
  });
});

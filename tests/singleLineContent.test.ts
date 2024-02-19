import mockComponents from "./mockData/Components.json";
import { findSingleLineContentText } from "../src/index";
import { Component } from "../src/gql/graphql";

describe("Test single line content text", () => {
  it("should return null if no single line content is found", () => {
    expect(
      findSingleLineContentText(
        mockComponents as Component[],
        "testSingleLineContentNotThere"
      )
    ).toBe(null);
  });
  it("should return the text of the single line content", () => {
    const singleLineContent = findSingleLineContentText(
      mockComponents as Component[],
      "testSingleLineContent"
    );

    expect(singleLineContent).not.toBe(null);
    expect(singleLineContent).toBe("This is a single line content");
  });
});

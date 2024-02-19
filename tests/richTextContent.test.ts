import { findRichTextContentJson, findRichTextContentPlainText } from "../src";
import { Component } from "../src/gql/graphql";
import mockComponents from "./mockData/Components.json";

describe("Test rich text content", () => {
  describe("Plain text", () => {
    it("should return empty array if no rich text content is found", () => {
      expect(
        findRichTextContentPlainText(
          mockComponents as Component[],
          "testRichTextContentNotThere"
        )
      ).toEqual([]);
    });
    it("should return the plain text of the rich text content", () => {
      const richTextContent = findRichTextContentPlainText(
        mockComponents as Component[],
        "testRichTextContent"
      );

      expect(richTextContent).not.toEqual([]);
      expect(richTextContent).toEqual(["heihei"]);
    });
  });
  describe("JSON", () => {
    it("should return empty array if no rich text content is found", () => {
      expect(
        findRichTextContentPlainText(
          mockComponents as Component[],
          "testRichTextContentNotThere"
        )
      ).toEqual([]);
    });
    it("should return the JSON of the rich text content", () => {
      const richTextContent = findRichTextContentJson(
        mockComponents as Component[],
        "testRichTextContent"
      );

      expect(richTextContent).not.toEqual([]);
      expect(richTextContent).toEqual([
        {
          kind: "block",
          type: "paragraph",
          textContent: "heihei",
        },
      ]);
    });
  });
});

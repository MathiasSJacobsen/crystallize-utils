import {
  Component,
  SingleLineContent,
  RichTextContent,
  ParagraphCollectionContent,
  ParagraphContent,
  BooleanContent,
  SelectionContent,
  SelectionComponentOption,
  ItemRelationsContent,
  ImageContent,
  ContentChunkContent,
  PropertiesTableContent,
  PropertiesTableSection,
  Image,
  DatetimeContent,
  FileContent,
  LocationContent,
} from "./gql/graphql";

const findContent = <TContent>(components: Component[], id: string): TContent =>
  components?.find((e) => e?.id === id)?.content as TContent;

export const findSingleLineContentText = (
  components: Component[],
  id: string
) => (findContent<SingleLineContent>(components, id)?.text as string) || null;

export const findRichTextContentPlainText = (
  components: Component[],
  id: string
) =>
  (findContent<RichTextContent>(components, id)?.plainText as string[]) ?? [];

export const findRichTextContentJson = (components: Component[], id: string) =>
  (findContent<RichTextContent>(components, id)?.json as string[]) ?? [];

export const findParagraphCollectionContent = (
  components: Component[],
  id: string
) =>
  (findContent<ParagraphCollectionContent>(components, id)
    ?.paragraphs as ParagraphContent[]) ?? [];

export const findBooleanContentValue = (components: Component[], id: string) =>
  (findContent<BooleanContent>(components, id)?.value as boolean) ?? false;

export const findSelectionContentOptions = (
  components: Component[],
  id: string
) =>
  (findContent<SelectionContent>(components, id)
    ?.options as SelectionComponentOption[]) ?? [];

export const findItemRelationItems = (components: Component[], id: string) =>
  findContent<ItemRelationsContent>(components, id)?.items ?? [];

export const findImageContentFirstImage = (
  components: Component[],
  id: string
) => (findContent<ImageContent>(components, id)?.firstImage as Image) ?? null;

export const findContentChunkContentChunks = (
  components: Component[],
  id: string
) =>
  (findContent<ContentChunkContent>(components, id)?.chunks as Component[][]) ??
  [];

export const findPropertiesTableContentSections = (
  components: Component[],
  id: string
) =>
  (findContent<PropertiesTableContent>(components, id)
    ?.sections as PropertiesTableSection[]) ?? [];

export const findDatetimeContentDatetime = (
  components: Component[],
  id: string
) => (findContent<DatetimeContent>(components, id)?.datetime as string) ?? "";

export const findImageContentImages = (components: Component[], id: string) =>
  (findContent<ImageContent>(components, id)?.images as Image[]) ?? [];

export const findFirstFileContent = (components: Component[], id: string) =>
  (findContent<FileContent>(components, id)?.firstFile as unknown as File) ?? null;

export const findLocationsContentLat = (components: Component[], id: string) =>
  (findContent<LocationContent>(components, id)?.lat as LocationContent) ??
  null;

export const findLocationsContentLong = (components: Component[], id: string) =>
  (findContent<LocationContent>(components, id)?.long as LocationContent) ??
  null;

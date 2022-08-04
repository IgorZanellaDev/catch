import { DefaultTheme } from "styled-components";

enum Variant {
  Like = "like",
  Ignore = "ignore",
  SuperLike = "superLike",
}

type VariantType = `${Variant}`;

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      [key: string]: string;
    };
    fontFamily: string;
    variants: {
      [key in Variant]: {
        main: string;
        contrast: string;
      };
    };
  }
}

const emptyVariant = {
  main: "",
  contrast: "",
};

const defaultTheme: DefaultTheme = {
  colors: {},
  fontFamily: "",
  variants: {
    [Variant.Like]: emptyVariant,
    [Variant.Ignore]: emptyVariant,
    [Variant.SuperLike]: emptyVariant,
  },
};

defaultTheme.colors.blue = "#3590F3";
defaultTheme.colors.red = "#FF0022";
defaultTheme.colors.green = "#0CCA4A";
defaultTheme.colors.white = "#FDFFFC";
defaultTheme.colors.black = "#262626";

defaultTheme.fontFamily =
  "ProximaNova, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, Helvetica, Arial, Segoe UI Emoji, Segoe UI Symbol, Apple Color Emoji, Twemoji Mozilla, Noto Color Emoji, EmojiOne Color, Android Emoji";

defaultTheme.variants.like = {
  main: defaultTheme.colors.green,
  contrast: defaultTheme.colors.white,
};

defaultTheme.variants.ignore = {
  main: defaultTheme.colors.red,
  contrast: defaultTheme.colors.white,
};

defaultTheme.variants.superLike = {
  main: defaultTheme.colors.blue,
  contrast: defaultTheme.colors.white,
};

export { defaultTheme };
export type { VariantType };

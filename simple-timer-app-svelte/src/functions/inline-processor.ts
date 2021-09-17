type StyleObject = Record<string, string>;

export const inlineStyleProcessor = (style: StyleObject): string =>
  Object.entries(style).reduce(
    (acc, [key, value]) => acc + `${key}: ${value};`,
    ""
  );

export const classNameConcatenator = (...classes: string[]): string =>
  classes.join(" ");

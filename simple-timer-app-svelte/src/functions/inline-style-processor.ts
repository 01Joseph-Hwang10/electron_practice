type StyleObject = Record<string, string>;

const inlineStyleProcessor = (style: StyleObject): string => {
  return Object.entries(style).reduce((acc, [key, value]) => {
    return acc + `${key}: ${value};`;
  }, "");
};

export default inlineStyleProcessor;

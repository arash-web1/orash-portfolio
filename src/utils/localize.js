export function localize(value, language) {
  if (value === null || value === undefined) {
    return "";
  }

  if (typeof value === "string") {
    return value;
  }

  return (
    value[language] ??
    value.en ??
    value.ru ??
    value.tj ??
    ""
  );
}
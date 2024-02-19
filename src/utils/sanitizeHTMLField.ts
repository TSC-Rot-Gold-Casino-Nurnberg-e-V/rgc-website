import sanitizeHtml from "sanitize-html";

export function sanitizeHTMLField(fieldToBeSanitized: string) {
  return sanitizeHtml(fieldToBeSanitized, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { target: "_blank" }),
    },
  });
}

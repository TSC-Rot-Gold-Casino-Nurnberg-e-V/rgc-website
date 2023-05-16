import sanitizeHtml from "sanitize-html";

// TODO prüfen, welche Tags & Attribute erlaubt werden sollten

export function sanitizeHTMLField(fieldToBeSanitized: string) {
  return sanitizeHtml(fieldToBeSanitized, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
  });
}
